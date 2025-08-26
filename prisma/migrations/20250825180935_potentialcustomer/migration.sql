/*
  Warnings:

  - You are about to drop the column `contact` on the `PotentialCustomer` table. All the data in the column will be lost.
  - Added the required column `email` to the `PotentialCustomer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `PotentialCustomer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."PotentialCustomer" DROP COLUMN "contact",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;
