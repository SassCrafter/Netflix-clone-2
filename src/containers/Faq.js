import React from "react";
import { Accordion, CtaForm, Section } from "../components";
import accordionData from "../fixtures/faqs.json";
// import * as Yup from "yup";

const FaqContainer = () => {
  return (
    <Section>
      <Accordion className="mb-2">
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        {accordionData.map((el) => {
          return (
            <Accordion.Item key={el.id}>
              <Accordion.Header id={el.id}>
                <Accordion.Question>{el.header}</Accordion.Question>
                <Accordion.Icon id={el.id} />
              </Accordion.Header>
              <Accordion.Body id={el.id}>
                <Accordion.Text>{el.body}</Accordion.Text>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
      <CtaForm />
    </Section>
  );
};

export default FaqContainer;


{/*<Form
        initialValues={{
          email: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form.Title>
          Ready to watch? Enter your email to create or restart your membership
        </Form.Title>
        <Form.Frame>
          <Form.InputPlacement>
            <Form.Label htmlFor="email" type="float">
              Email
            </Form.Label>
            <Form.Input type="email" name="email" id="email" />
          </Form.InputPlacement>
          <Form.Submit size="xl">Get Started</Form.Submit>
        </Form.Frame>
      </Form>*/}