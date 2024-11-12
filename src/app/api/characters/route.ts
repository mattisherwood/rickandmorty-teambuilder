import { GET_CHARACTERS } from "@/lib/queries"
import client from "@/lib/urql-client"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
  const url = new URL(req.url)
  const page = url.searchParams.get("page") || "1"
  const gender = url.searchParams.get("gender")
  const name = url.searchParams.get("name")
  const species = url.searchParams.get("species")
  const status = url.searchParams.get("status")

  const filter = {
    gender,
    name,
    species,
    status,
  }

  try {
    console.log("Fetching characters with filter:", filter)
    const result = await client
      .query(GET_CHARACTERS, { page: parseInt(page, 10), filter })
      .toPromise()
    if (result.error) {
      throw new Error(result.error.message)
    }
    return NextResponse.json(result.data.characters)
  } catch (error) {
    console.error("Error fetching characters:", error)
    return NextResponse.json(
      { error: "Failed to fetch characters" },
      { status: 500 }
    )
  }
}
