import React from "react";
import { Accordion } from "../components";
import accordionData from "../fixtures/faqs.json";

const AccordionContainer = () => {
  return (
    <Accordion>
      {/* <Accordion.Title>Frequently Asked Questions</Accordion.Title> */}
      {accordionData.map((el) => {
        return (
          <Accordion.Item key={el.id}>
            <Accordion.Header>
              <Accordion.Title>What is Netflix?</Accordion.Title>
              <Accordion.Icon>+</Accordion.Icon>
            </Accordion.Header>
            <Accordion.Body>
              <Accordion.Text>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries, and more
                on thousands of internet-connected devices.
              </Accordion.Text>
              <Accordion.Text>
                You can watch as much as you want, whenever you want without a
                single commercial – all for one low monthly price. There's
                always something new to discover and new TV shows and movies are
                added every week!
              </Accordion.Text>
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};

export default AccordionContainer;
