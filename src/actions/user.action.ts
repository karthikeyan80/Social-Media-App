"use server";

import { prisma } from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";

/**
 * Synchronizes the current user's data with the application's database
 * This function is called when a user logs in or when their data needs to be updated
 */
export async function syncUser() {
  try {
    const {userId} = await auth();
    const user = await currentUser();

    if (!user || !userId) {
      return;
    }

    // Check if the user already exists in the database
    const existingUser = await prisma.user.findUnique({
      where: { clerkId: userId },
    });

    if (existingUser) return existingUser;


    const dbUser = await prisma.user.create({
      data: {
        clerkId : userId,
        name : `${user.firstName || ""}  ${user.lastName || ""}`,
        username: user.username ?? user.emailAddresses[0]?.emailAddress.split("@")[0] ,
        email : user.emailAddresses[0].emailAddress,
        image : user.imageUrl,
      }})

      return dbUser;
  } catch (error) {
   
  }
}


export async function getUserByClerkId(clerkId: string) {
  return prisma.user.findUnique({
    where: {
      clerkId,
    },
    include: {
      _count: {
        select: {
          followers: true,
          following: true,
          posts: true,
        },
      },
    },
  });
}

export async function getDbUserId() {
  const { userId: clerkId } = await auth();
  if (!clerkId) return null;

  const user = await getUserByClerkId(clerkId);

  if (!user) throw new Error("User not found");

  return user.id;
}

export async function getRandomUsers() {
  try {
    const userId = await getDbUserId();

    if (!userId) return [];

    // get 3 random users exclude ourselves & users that we already follow
    const randomUsers = await prisma.user.findMany({
      where: {
        AND: [
          { NOT: { id: userId } },
          {
            NOT: {
              followers: {
                some: {
                  folllowerId: userId,
                },
              },
            },
          },
        ],
      },
      select: {
        id: true,
        name: true,
        username: true,
        image: true,
        _count: {
          select: {
            followers: true,
          },
        },
      },
      take: 3,
    });

    return randomUsers;
  } catch (error) {
    console.log("Error fetching random users", error);
    return [];
  }
}