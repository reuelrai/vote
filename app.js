
const supabaseUrl = 'https://rsezqhsuilalbdespgod.supabase.co'; // Replace with your Supabase project URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzZXpxaHN1aWxhbGJkZXNwZ29kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzMzkyMzEsImV4cCI6MjA1MTkxNTIzMX0.2A0lFSRQJ4E2xgtOLYA0LiB9ZfT0SCkbVVGyc5AAT5Y'; // Replace with your Supabase anon key

// Correct variable name
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

document.getElementById('voteForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const vote = document.getElementById('vote').value;

    try {
        const { data, error } = await supabaseClient
            .from('classvotes') // Replace 'classvotes' with your table name
            .insert([
                { name: name, vote: vote }
            ]);

        if (error) {
            console.error('Error:', error);
            alert('Failed to submit vote.');
        } else {
            console.log('Vote submitted:', data);
            alert('Vote submitted successfully!');
        }
    } catch (err) {
        console.error('Unexpected Error:', err);
    }
});