import { createMocks } from 'node-mocks-http';
import handleFeedback from '../src/pages/api/feedback';
import feedback from "../src/db/models/feedback";
import dbConnect from '../src/db/dbConnect';

describe('/api/feedback', () => {
  test('submit feedback', async () => {
    const text = "test test test test";
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        message: text
      },
    });

    await handleFeedback(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        message: 'Feedback submitted successfully.',
      }),
    );

    // Delete newly created test document from db.
    await dbConnect(); // connect to db
    await feedback.findOneAndRemove({feedback: text});
  });
});