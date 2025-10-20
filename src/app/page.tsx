import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import Container from "@/components/Container";
import { Hero, HeroSubTitle, HeroTitle } from "@/components/Hero";
import { RightChevron } from "@/components/icons/RightChevron";

export default function Home() {
  return (
    <Container className="pt-[6.4rem]">
      <Hero>
        <SecondaryButton className="" />
        <HeroTitle>
          Linear is a better way
          <br className="md:block hidden" />
          to build products
        </HeroTitle>
        <HeroSubTitle>
          Meet the new standard for modern software development.
          <br className="md:block hidden" />
          Streamline issues, sprints, and product roadmaps.
        </HeroSubTitle>
        <PrimaryButton
          className="text-md px-[2.4rem] h-[4.8rem]"
          content={
            <>
              <span className="mr-[0.8rem]">Get Started</span> <RightChevron />
            </>
          }
        />
        <img className="mt-[12.8rem]" src="/img/hero.png" alt="Hero Image" />
      </Hero>
    </Container>
  );
}
