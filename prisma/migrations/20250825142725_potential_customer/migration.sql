-- CreateTable
CREATE TABLE "public"."PotentialCustomer" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PotentialCustomer_pkey" PRIMARY KEY ("id")
);
