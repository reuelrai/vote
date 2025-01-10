const supabaseUrl = 'https://rsezqhsuilalbdespgod.supabase.co'; // Replace with your Supabase project URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzZXpxaHN1aWxhbGJkZXNwZ29kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzMzkyMzEsImV4cCI6MjA1MTkxNTIzMX0.2A0lFSRQJ4E2xgtOLYA0LiB9ZfT0SCkbVVGyc5AAT5Y'; // Replace with your Supabase anon key

const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

// Predefined list of names
const names = ["Aayush Giri", "Aayusha Shresthacharya Baniya", "Asmita Silwal", "Avishek Sigel", "Bhumi Pradhan", "Bipin Dawadi", "Jenisha Shrestha", "Mandip Shrestha", "Muskan Rajbanshi", "Nikita Chaudhary", "Rakshya Shrestha", "Rijan Rijal", "Ritesh Chaudhary", "Reuel Rai", "Sakshyam Maharjan", "Samyog Sapkota", "Sandeep Lamichhane", "Samyog Sapkota", "Sandeep Lamichhane", "Shristi Budha Magar", "Srestaa Shrestha", "Sudip Bhandari", "Umang Magar"];

// Populate the dropdown dynamically
const voteSelect = document.getElementById('vote');
names.forEach(name => {
    const option = document.createElement('option');
    option.value = name;
    option.textContent = name;
    voteSelect.appendChild(option);
});

const name = ["Aayush Giri", "Aayusha Shresthacharya Baniya", "Asmita Silwal", "Avishek Sigel", "Bhumi Pradhan", "Bipin Dawadi", "Jenisha Shrestha", "Mandip Shrestha", "Muskan Rajbanshi", "Nikita Chaudhary", "Rakshya Shrestha", "Rijan Rijal", "Ritesh Chaudhary", "Reuel Rai", "Sakshyam Maharjan", "Samyog Sapkota", "Sandeep Lamichhane", "Samyog Sapkota", "Sandeep Lamichhane", "Shristi Budha Magar", "Srestaa Shrestha", "Sudip Bhandari", "Umang Magar"];

// Populate the dropdown dynamically
const voteSelec = document.getElementById('name');
names.forEach(name => {
    const option = document.createElement('option');
    option.value = name;
    option.textContent = name;
    voteSelec.appendChild(option);
});


document.getElementById('voteForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const vote = document.getElementById('vote').value;

    try {
        const { data, error } = await supabaseClient
            .from('classvotes') // Replace 'classvotes' with your table name
            .insert([{ name: name, vote: vote }]);

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
