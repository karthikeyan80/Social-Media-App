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
