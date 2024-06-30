-- CreateTable
CREATE TABLE "User" (
    "userId" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Game" (
    "gameName" TEXT NOT NULL,
    "starPoint" DOUBLE PRECISION NOT NULL,
    "playerNum" INTEGER NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("gameName")
);
