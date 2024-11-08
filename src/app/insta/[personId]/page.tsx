import { getAllPersons, getPersonById } from "@/services/person";
import { redirect } from "next/navigation";
import Insta from "./_components/Insta";

async function InstaPage({
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

  return (
    <Insta
      personId={personId}
      persons={persons}
      currentPerson={currentPerson}
    />
  );
}

export default InstaPage;
