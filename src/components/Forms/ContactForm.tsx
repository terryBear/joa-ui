import { Button, Form } from "react-bootstrap";
import { useApi } from "../../hooks/useApi.service";
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from "primereact/inputtext";
import { useState } from "react";

export const ContactForm = () => {
  const api = useApi();
  const [contact, setContact] = useState<any>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  return (
    <Form onSubmit={(e) => {}}>
      <Form.Group className="mb-4">
        <InputText
          className="w-75"
          value={contact.name}
          onChange={(e) => setContact({ ...contact, name: e.target.value })}
          placeholder="Ex: John Doe"
        />
      </Form.Group>
      <Form.Group className="mb-4">
        <InputText
          className="w-75"
          id="email"
          placeholder="example@mail.com"
          value={contact.email}
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
        />
      </Form.Group>
      <Form.Group className="mb-4">
        <InputText
          className="w-75"
          id="subject"
          placeholder="Subject..."
          value={contact.subject}
          onChange={(e) => setContact({ ...contact, subject: e.target.value })}
        />
      </Form.Group>
      <Form.Group className="mb-4">
        <InputTextarea
          className="w-75"
          id="message"
          rows={5}
          placeholder="Comment"
          value={contact.message}
          onChange={(e) => setContact({ ...contact, message: e.target.value })}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Button variant="primary" className="px-5" type="submit">
          Send
        </Button>
      </Form.Group>
    </Form>
  );
};
