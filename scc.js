const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const summaryInput = document.getElementById('summary');
const educationSection = document.getElementById('education-section');
const experienceSection = document.getElementById('experience-section');
const skillsInputs = document.querySelectorAll('#skills input');

const previewName = document.getElementById('preview-name');
const previewEmail = document.getElementById('preview-email');
const previewPhone = document.getElementById('preview-phone');
const previewSummary = document.getElementById('preview-summary');
const previewEducation = document.getElementById('preview-education');
const previewExperience = document.getElementById('preview-experience');
const previewSkills = document.getElementById('preview-skills');

function updatePreview() {
    previewName.textContent = nameInput.value;
    previewEmail.textContent = emailInput.value;
    previewPhone.textContent = phoneInput.value;
    previewSummary.textContent = summaryInput.value;

    previewEducation.innerHTML = '';
    document.querySelectorAll('.education-input').forEach(input => {
        if (input.value.trim()) {
            const li = document.createElement('li');
            li.textContent = input.value;
            previewEducation.appendChild(li);
        }
    });

    previewExperience.innerHTML = '';
    document.querySelectorAll('.experience-input').forEach(input => {
        if (input.value.trim()) {
            const li = document.createElement('li');
            li.textContent = input.value;
            previewExperience.appendChild(li);
        }
    });

    const selectedSkills = Array.from(skillsInputs)
        .filter(input => input.checked)
        .map(input => input.value);
    previewSkills.textContent = selectedSkills.join(', ');
}

document.getElementById('add-education').addEventListener('click', () => {
    const div = document.createElement('div');
    div.classList.add('education-entry');
    div.innerHTML = `<input type="text" class="education-input" placeholder="e.g., B.Sc. in Computer Science">`;
    educationSection.insertBefore(div, document.getElementById('add-education'));
});

document.getElementById('add-experience').addEventListener('click', () => {
    const div = document.createElement('div');
    div.classList.add('experience-entry');
    div.innerHTML = `<input type="text" class="experience-input" placeholder="e.g., Software Engineer at XYZ">`;
    experienceSection.insertBefore(div, document.getElementById('add-experience'));
});

[nameInput, emailInput, phoneInput, summaryInput].forEach(input => {
    input.addEventListener('input', updatePreview);
});

educationSection.addEventListener('input', updatePreview);
experienceSection.addEventListener('input', updatePreview);
skillsInputs.forEach(input => input.addEventListener('change', updatePreview));

document.getElementById('clear-form').addEventListener('click', () => {
    document.getElementById('resume-form').reset();
    document.querySelectorAll('.education-input').forEach((input, index) => {
        if (index > 0) input.parentElement.remove();
    });
    document.querySelectorAll('.experience-input').forEach((input, index) => {
        if (index > 0) input.parentElement.remove();
    });
    updatePreview();
});
