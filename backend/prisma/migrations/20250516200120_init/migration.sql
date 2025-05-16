/*
  Warnings:

  - You are about to drop the `StockItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "StockItem";

-- CreateTable
CREATE TABLE "stock" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unit" TEXT NOT NULL,
    "threshold" INTEGER NOT NULL,
    "buy" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "stock_pkey" PRIMARY KEY ("id")
);
