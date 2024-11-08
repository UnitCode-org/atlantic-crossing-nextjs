import { getAllPersons, getPersonById } from "@/services/person";
import Leaderboard from "./_components/Leaderboard";
import { redirect } from "next/navigation";

async function LeaderboardPage({
  params,
}: {
  params: Promise<{ personId: string }>;
}) {
  const personId = parseInt((await params).personId);
  const currentPerson = await getPersonById(personId);
  if (!currentPerson) {
    return redirect("/");
  }

  const persons = await getAllPersons();

  return <Leaderboard persons={persons} currentPerson={currentPerson} />;
}

export default LeaderboardPage;
