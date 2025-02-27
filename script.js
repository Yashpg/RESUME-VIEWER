// script.js
function analyzeResume() {
    const fileInput = document.getElementById('resume-upload');
    const file = fileInput.files[0];

    if (!file) {
        alert("Please upload a resume file.");
        return;
    }

    const reader = new FileReader();
    
    reader.onload = function(e) {
        const content = e.target.result;
        analyzeContent(content);
    }

    reader.onerror = function() {
        alert("There was an error reading the file.");
    }

    if (file.type === 'application/pdf' || file.type === 'application/msword' || file.type === 'text/plain') {
        reader.readAsText(file); // Only reads text-based files
    } else {
        alert("Please upload a valid PDF, DOCX, or TXT file.");
    }
}

function analyzeContent(content) {
    let feedback = "Resume Analysis:\n\n";

    // Simulate keyword analysis
    const keywords = ['experience', 'skills', 'education', 'project', 'leadership'];
    const keywordFound = keywords.filter(keyword => content.toLowerCase().includes(keyword)).length;

    feedback += `Keywords Found: ${keywordFound} / ${keywords.length}\n`;

    // Simulate readability analysis (you can implement real readability logic)
    const readability = content.split(" ").length > 300 ? 'Good readability' : 'Needs improvement';

    feedback += `Readability: ${readability}`;

    // Display feedback
    document.getElementById('feedback').textContent = feedback;
}
