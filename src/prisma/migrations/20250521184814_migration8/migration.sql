/*
  Warnings:

  - You are about to drop the column `campaigsAwarenessId` on the `CollectionPoints` table. All the data in the column will be lost.
  - You are about to drop the column `AwarenessId` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the `CampaigsAwareness` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CollectionPoints" DROP CONSTRAINT "CollectionPoints_campaigsAwarenessId_fkey";

-- DropForeignKey
ALTER TABLE "Food" DROP CONSTRAINT "Food_AwarenessId_fkey";

-- AlterTable
ALTER TABLE "CollectionPoints" DROP COLUMN "campaigsAwarenessId";

-- AlterTable
ALTER TABLE "Food" DROP COLUMN "AwarenessId";

-- DropTable
DROP TABLE "CampaigsAwareness";
