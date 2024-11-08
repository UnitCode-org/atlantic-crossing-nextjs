import MeetButton from "@/app/meet/[personId]/_components/MeetButton";
import NextButton from "@/app/meet/[personId]/_components/NextButton";
import Card from "@/components/ui/card";
import Navbar from "@/components/ui/Navbar";
import { Separator } from "@/components/ui/separator";
import { getPersonById } from "@/services/person";
import { Briefcase, Link as LinkIcon, Location } from "iconsax-react";
import Link from "next/link";
import { redirect } from "next/navigation";

async function ProfilePage({
  params,
}: {
  params: Promise<{ personId: string; profileId: string }>;
}) {
  const personId = parseInt((await params).personId);
  const profileId = parseInt((await params).profileId);
  const currentPerson = await getPersonById(personId);
  if (!currentPerson) {
    return redirect("/");
  }

  const profilePerson = await getPersonById(profileId);
  if (!profilePerson) {
    return redirect("/profile/" + personId);
  }

  return (
    <div className="flex flex-col justify-between items-center h-screen">
      <div className="flex justify-end w-full md:hidden">
        <Navbar personId={currentPerson.id} />
      </div>

      <div className="flex justify-center items-center text-center flex-col xl:hidden pt-0 md:pt-8 pb-8 md:pb-0 px-16">
        <h2 className="text-[28px] font-semibold w-fit">Atlantic Crossing</h2>
        <p className="text-[16px] font-semibold w-fit pt-1">
          Welcome, <span className="text-primary">{currentPerson.name}</span>
        </p>
        <Link
          className="text-xs font-semibold text-primary underline"
          href={`/`}
        >
          That&apos;s not me
        </Link>
      </div>

      <div className="hidden md:block">
        <Navbar personId={currentPerson.id} />
      </div>

      <div className="overflow-y-auto flex items-center justify-center w-full h-full">
        <div className="flex-grow w-20 p-12 hidden xl:flex flex-col items-center">
          <div className="w-fit">
            <h2 className="text-[32px] font-semibold w-fit">
              Atlantic Crossing
            </h2>
            <p className="text-[20px] font-semibold w-fit">
              Welcome,{" "}
              <span className="text-primary">{currentPerson.name}</span>
            </p>
            <Link
              className="text-sm font-semibold text-primary underline"
              href={`/`}
            >
              That&apos;s not me
            </Link>
          </div>
        </div>
        <Card className="w-[48rem] overflow-y-auto h-full mx-6 p-6 md:p-8">
          <h1 className="text-[20px] md:text-[32px] font-semibold pb-5 md:pb-6">
            {profilePerson.name}
          </h1>
          <div className="grid md:grid-cols-2 gap-4 overflow-hidden">
            <div className="bg-[#F6F7FE] rounded-lg p-4 h-fit flex flex-col gap-2 overflow-hidden">
              <h2 className="text-base font-semibold">Profile</h2>
              {profilePerson.organisation !== "" &&
                profilePerson.title !== "" && (
                  <div className="flex gap-2">
                    <Briefcase
                      size="16"
                      variant="Bold"
                      color="#8E8E93"
                      className="shrink-0"
                    />
                    <div className="flex-col gap-1">
                      {profilePerson.organisation !== "" && (
                        <p className="text-xs font-inter">
                          {profilePerson.organisation}
                        </p>
                      )}
                      {profilePerson.title !== "" && (
                        <p className="text-xs font-inter">
                          {profilePerson.title}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              {profilePerson.location !== "" && (
                <div className="flex gap-2">
                  <Location
                    size="16"
                    variant="Bold"
                    color="#8E8E93"
                    className="shrink-0"
                  />
                  <p className="text-xs font-inter">{profilePerson.location}</p>
                </div>
              )}
              <div className="flex gap-2">
                <LinkIcon
                  size="16"
                  variant="Bold"
                  color="#8E8E93"
                  className="shrink-0"
                />
                <div className="flex flex-col gap-1 w-full overflow-hidden">
                  {profilePerson.website !== "" && (
                    <Link
                      href={profilePerson.website}
                      target="_blank"
                      className="text-xs font-inter hover:text-primary/80 transition truncate"
                    >
                      {profilePerson.website}
                    </Link>
                  )}
                  {profilePerson.instagramLink !== "" && (
                    <Link
                      href={profilePerson.instagramLink}
                      target="_blank"
                      className="text-xs font-inter hover:text-primary/80 transition truncate"
                    >
                      {profilePerson.instagramLink}
                    </Link>
                  )}
                  {profilePerson.linkedinLink !== "" && (
                    <Link
                      href={profilePerson.linkedinLink}
                      target="_blank"
                      className="text-xs font-inter hover:text-primary/80 transition truncate"
                    >
                      {profilePerson.linkedinLink}
                    </Link>
                  )}
                  {profilePerson.earthoneLink !== "" && (
                    <Link
                      href={profilePerson.earthoneLink}
                      target="_blank"
                      className="text-xs font-inter hover:text-primary/80 transition truncate"
                    >
                      {profilePerson.earthoneLink}
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className="bg-[#F6F7FE] rounded-lg p-4 flex flex-col gap-4">
              {profilePerson.bio && (
                <>
                  <div>
                    <h2 className="text-base font-semibold">Bio</h2>
                    <p className="text-xs font-inter">{profilePerson.bio}</p>
                  </div>
                  <Separator className="last:hidden" />
                </>
              )}
              {profilePerson.offer && (
                <>
                  <div>
                    <h2 className="text-base font-semibold">Offer</h2>
                    <p className="text-xs font-inter">{profilePerson.offer}</p>
                  </div>
                  <Separator className="last:hidden" />
                </>
              )}
              {profilePerson.need && (
                <>
                  <div>
                    <h2 className="text-base font-semibold">Need</h2>
                    <p className="text-xs font-inter">{profilePerson.need}</p>
                  </div>
                  <Separator className="last:hidden" />
                </>
              )}
              {profilePerson.action && (
                <>
                  <div>
                    <h2 className="text-base font-semibold">Action</h2>
                    <p className="text-xs font-inter">{profilePerson.action}</p>
                  </div>
                  <Separator className="last:hidden" />
                </>
              )}
              {profilePerson.guild && (
                <>
                  <div>
                    <h2 className="text-base font-semibold">Guild</h2>
                    <p className="text-xs font-inter">{profilePerson.guild}</p>
                  </div>
                  <Separator className="last:hidden" />
                </>
              )}
            </div>
          </div>
        </Card>
        <div className="flex-grow w-20 hidden xl:block"></div>
      </div>
      <div className="flex items-center gap-7 pb-4 pt-6">
        <NextButton personId={currentPerson.id} />
        <MeetButton
          personId={currentPerson.id}
          meetPersonId={profilePerson.id}
        />
      </div>
    </div>
  );
}

export default ProfilePage;
