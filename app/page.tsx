import { Disclosure } from "@/components/disclosure";
import React from "react";
import { ExternalLink } from "@/components/external-link";

export default function HomePage() {
  return (
    <>
      <Section id="name">
        <h1>
          <a href="/" className="flex">
            <SectionHeader>Adam</SectionHeader>
            <SectionBody className="text-red-600">Spera</SectionBody>
          </a>
        </h1>
      </Section>

      <Section id="currently">
        <SectionHeader>Currently</SectionHeader>
        <SectionBody>
          <List>
            <ListItem>
              <ExternalLink href="https://www.cisco.com/">Cisco</ExternalLink>,
              Consulting Engineer
              <SubBlock>Data Center: NX-OS &amp; NDFC</SubBlock>
            </ListItem>
          </List>
        </SectionBody>
      </Section>

      <Section id="previously">
        <SectionHeader>Previously</SectionHeader>
        <SectionBody>
          <List>
            <ListItem>
              <ExternalLink href="https://www.cisco.com/">Cisco</ExternalLink>,
              Consulting Engineer Extended Intern
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.cisco.com/">Cisco</ExternalLink>,
              Consulting Engineer Intern
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.arcadia.edu/">AU</ExternalLink>,
              Lead Networking Intern
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.cisco.com/">Cisco</ExternalLink>,
              Network Recreate Engineer Co-Op
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.arcadia.edu/">AU</ExternalLink>,
              Networking Intern
            </ListItem>
            <ListItem>
              <Disclosure>
                <ListItem>
                  <ExternalLink href="https://www.codeninjas.com/">
                    CodeNinjas
                  </ExternalLink>
                  , IT Administrator
                </ListItem>
                <ListItem>
                  <ExternalLink href="https://www.arcadia.edu/">
                    AU
                  </ExternalLink>
                  , Networking Assistant
                </ListItem>
              </Disclosure>
            </ListItem>
          </List>
        </SectionBody>
      </Section>

      <Section id="links">
        <SectionHeader>Links</SectionHeader>
        <SectionBody>
          <ExternalLink href="https://github.com/adamspera">
            GitHub
          </ExternalLink>
          ,{" "}
          <ExternalLink href="https://www.linkedin.com/in/adamtspera/">
            LinkedIn
          </ExternalLink>
          ,{" "}
          <ExternalLink href="mailto:adamspera@hotmail.com">Email</ExternalLink>
        </SectionBody>
      </Section>

      <Section id="projects">
        <SectionHeader>Projects</SectionHeader>
        <SectionBody>
          <ExternalLink href="https://tophat.sh">TOPHAT</ExternalLink>,{" "}
          <ExternalLink href="https://www.linkedin.com/pulse/idiosplash-open-source-meraki-ipsk-solution-wireless-networks-spera-tyfde/">
            IdioSplash
          </ExternalLink>
          ,{" "}
          <ExternalLink href="https://laundrylott.com/">
            LaundryLott
          </ExternalLink>{" "}
        </SectionBody>
      </Section>
    </>
  );
}

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="flex mb-2 text-lg flex-col md:flex-row">
      {children}
    </section>
  );
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="md:w-32 md:text-right text-stone-400 dark:text-stone-200 font-light">
      {children}
    </h2>
  );
}

function SectionBody({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`grow pl-2 md:pl-4 font-semibold ${className}`}>
      {children}
    </div>
  );
}

function List({ children }: { children: React.ReactNode }) {
  return <ul>{children}</ul>;
}

function ListItem({ children }: { children: React.ReactNode }) {
  return <li className="mb-2">{children}</li>;
}

function Sub({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs text-stone-700 dark:text-stone-200">
      {children}
    </span>
  );
}

function SubBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs text-stone-700 dark:text-stone-200">{children}</div>
  );
}
