import { createClientFromRequest } from 'npm:@base44/sdk@0.8.40';

export default async function(req: Request): Promise<Response> {
  try {
    const base44 = createClientFromRequest(req);

    let body;
    try {
      body = await req.json();
    } catch {
      return Response.json({ error: 'Invalid request body' }, { status: 400 });
    }

    const { name, email, service, message } = body || {};

    if (!name || !email || !message) {
      return Response.json({ error: 'Name, email, and message are required' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(String(email))) {
      return Response.json({ error: 'Please enter a valid email address' }, { status: 400 });
    }

    const record = await base44.asServiceRole.entities.ContactMessage.create({
      name: String(name).trim().slice(0, 100),
      email: String(email).trim().slice(0, 200),
      service: service ? String(service).trim().slice(0, 100) : '',
      message: String(message).trim().slice(0, 5000)
    });

    return Response.json({ success: true, id: record.id });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}