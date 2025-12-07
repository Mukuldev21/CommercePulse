import { test, expect } from '@playwright/test';

test('verify mokapi connectivity', async ({ request }) => {
    // Verify we can fetch users from the mock service
    const response = await request.get('/api/users');
    expect(response.ok()).toBeTruthy();

    const data = await response.json();
    console.log('Received Mock Data:', data);

    // Basic validation of the mock structure
    expect(data.users).toBeDefined();
    expect(Array.isArray(data.users)).toBeTruthy();
});
