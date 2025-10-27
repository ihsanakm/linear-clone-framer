import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import Container from "@/components/Container";
import { Hero, HeroSubTitle, HeroTitle } from "@/components/Hero";
import HeroImage from "@/components/HeroImage";
import { RightChevron } from "@/components/icons/RightChevron";

export default function Home() {
  return (
    <Container className="pt-[6.4rem]">
      <Hero>
        <SecondaryButton className="animate-fade-in opacity-0 [--animation-delay:200ms]" />
        <HeroTitle className="animate-fade-in opacity-0 [--animation-delay:400ms]">
          Linear is a better way
          <br className="md:block hidden" />
          <span> to build products</span>
        </HeroTitle>
        <HeroSubTitle className="animate-fade-in opacity-0 [--animation-delay:600ms]">
          Meet the new standard for modern software development.
          <br className="md:block hidden" />
          Streamline issues, sprints, and product roadmaps.
        </HeroSubTitle>
        <PrimaryButton
          className="text-md px-[2.4rem] h-[4.8rem] animate-fade-in opacity-0 [--animation-delay:800ms]"
          content={
            <>
              <span className="mr-[0.8rem]">Get Started</span> <RightChevron />
            </>
          }
        />
        <HeroImage />
      </Hero>
    </Container>
  );
}
