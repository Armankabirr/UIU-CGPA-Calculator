// Grading policy
const gradingScale = {
    'A': { min: 90, max: 100, point: 4.00 },
    'A-': { min: 86, max: 89, point: 3.67 },
    'B+': { min: 82, max: 85, point: 3.33 },
    'B': { min: 78, max: 81, point: 3.00 },
    'B-': { min: 74, max: 77, point: 2.67 },
    'C+': { min: 70, max: 73, point: 2.33 },
    'C': { min: 66, max: 69, point: 2.00 },
    'C-': { min: 62, max: 65, point: 1.67 },
    'D+': { min: 58, max: 61, point: 1.33 },
    'D': { min: 55, max: 57, point: 1.00 },
    'F': { min: 0, max: 54, point: 0.00 }
};

let courseCount = 0;

// Add course input fields
function addCourse() {
    courseCount++;
    const container = document.getElementById('coursesContainer');
    
    const courseDiv = document.createElement('div');
    courseDiv.className = 'course-item';
    courseDiv.id = `course-${courseCount}`;
    
    courseDiv.innerHTML = `
        <div class="course-header">
            <span class="course-number">Course ${courseCount}</span>
            <button class="btn-remove" onclick="removeCourse(${courseCount})">Remove</button>
        </div>
        <div class="course-inputs">
            <div class="input-group">
                <label>Course Name:</label>
                <input type="text" class="course-name" placeholder="e.g., Data Structures">
            </div>
            <div class="input-group">
                <label>Credit Hours:</label>
                <input type="number" class="course-credit" step="0.5" min="0" placeholder="3" required>
            </div>
            <div class="input-group">
                <label>Grade/Marks:</label>
                <select class="course-grade">
                    <option value="">Select Grade</option>
                    <option value="A">A (4.00)</option>
                    <option value="A-">A- (3.67)</option>
                    <option value="B+">B+ (3.33)</option>
                    <option value="B">B (3.00)</option>
                    <option value="B-">B- (2.67)</option>
                    <option value="C+">C+ (2.33)</option>
                    <option value="C">C (2.00)</option>
                    <option value="C-">C- (1.67)</option>
                    <option value="D+">D+ (1.33)</option>
                    <option value="D">D (1.00)</option>
                    <option value="F">F (0.00)</option>
                    <option value="marks">Enter Marks %</option>
                </select>
            </div>
        </div>
        <div class="input-group" style="margin-top: 10px; display: none;" id="marks-input-${courseCount}">
            <label>Marks (%):</label>
            <input type="number" class="course-marks" min="0" max="100" placeholder="Enter marks percentage">
        </div>
    `;
    
    container.appendChild(courseDiv);
    
    // Add event listener to show/hide marks input
    const gradeSelect = courseDiv.querySelector('.course-grade');
    gradeSelect.addEventListener('change', function() {
        const marksInput = document.getElementById(`marks-input-${courseCount}`);
        if (this.value === 'marks') {
            marksInput.style.display = 'block';
        } else {
            marksInput.style.display = 'none';
        }
    });
}

// Remove course
function removeCourse(id) {
    const course = document.getElementById(`course-${id}`);
    if (course) {
        course.remove();
    }
}

// Convert marks to grade point
function marksToGradePoint(marks) {
    for (let grade in gradingScale) {
        if (marks >= gradingScale[grade].min && marks <= gradingScale[grade].max) {
            return { grade: grade, point: gradingScale[grade].point };
        }
    }
    return { grade: 'F', point: 0.00 };
}

// Calculate GPA
function calculateGPA() {
    const courses = document.querySelectorAll('.course-item');
    
    if (courses.length === 0) {
        alert('Please add at least one course!');
        return;
    }
    
    let totalCredits = 0;
    let totalGradePoints = 0;
    let earnedCredits = 0;
    let courseDetails = [];
    
    for (let course of courses) {
        const credit = parseFloat(course.querySelector('.course-credit').value);
        const gradeSelect = course.querySelector('.course-grade').value;
        const courseName = course.querySelector('.course-name').value || 'Unnamed Course';
        
        if (!credit || !gradeSelect) {
            alert('Please fill in all course details!');
            return;
        }
        
        let gradePoint;
        let grade;
        
        if (gradeSelect === 'marks') {
            const marks = parseFloat(course.querySelector('.course-marks').value);
            if (isNaN(marks) || marks < 0 || marks > 100) {
                alert('Please enter valid marks (0-100)!');
                return;
            }
            const result = marksToGradePoint(marks);
            gradePoint = result.point;
            grade = result.grade;
        } else {
            gradePoint = gradingScale[gradeSelect].point;
            grade = gradeSelect;
        }
        
        totalCredits += credit;
        totalGradePoints += credit * gradePoint;
        
        // Only count earned credits for grades D or higher
        if (gradePoint >= 1.00) {
            earnedCredits += credit;
        }
        
        courseDetails.push({
            name: courseName,
            credit: credit,
            grade: grade,
            gradePoint: gradePoint
        });
    }
    
    const gpa = totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : 0;
    
    // Display results
    const resultBox = document.getElementById('gpaResult');
    resultBox.innerHTML = `
        <h3 style="color: #ff6b35; margin-bottom: 15px;">Semester Results</h3>
        ${courseDetails.map(course => `
            <div class="result-item">
                <span class="result-label">${course.name}</span>
                <span>${course.grade} (${course.gradePoint.toFixed(2)}) × ${course.credit} credits</span>
            </div>
        `).join('')}
        <div class="result-item" style="margin-top: 15px; padding-top: 15px; border-top: 2px solid #ff6b35;">
            <span class="result-label">Total Credits Attempted:</span>
            <span class="result-value">${totalCredits.toFixed(1)}</span>
        </div>
        <div class="result-item">
            <span class="result-label">Earned Credits:</span>
            <span class="result-value">${earnedCredits.toFixed(1)}</span>
        </div>
        <div class="result-item">
            <span class="result-label">Semester GPA:</span>
            <span class="result-value">${gpa}</span>
        </div>
    `;
    resultBox.classList.add('show');
}

// Calculate CGPA
function calculateCGPA() {
    const previousCGPA = parseFloat(document.getElementById('previousCGPA').value) || 0;
    const completedCredits = parseFloat(document.getElementById('completedCredits').value) || 0;
    
    const courses = document.querySelectorAll('.course-item');
    
    if (courses.length === 0) {
        alert('Please add courses for the current semester!');
        return;
    }
    
    let currentCredits = 0;
    let currentGradePoints = 0;
    let totalEarnedCredits = completedCredits;
    
    for (let course of courses) {
        const credit = parseFloat(course.querySelector('.course-credit').value);
        const gradeSelect = course.querySelector('.course-grade').value;
        
        if (!credit || !gradeSelect) {
            alert('Please fill in all course details!');
            return;
        }
        
        let gradePoint;
        
        if (gradeSelect === 'marks') {
            const marks = parseFloat(course.querySelector('.course-marks').value);
            if (isNaN(marks) || marks < 0 || marks > 100) {
                alert('Please enter valid marks (0-100)!');
                return;
            }
            gradePoint = marksToGradePoint(marks).point;
        } else {
            gradePoint = gradingScale[gradeSelect].point;
        }
        
        currentCredits += credit;
        currentGradePoints += credit * gradePoint;
        
        // Only count earned credits for grades D or higher
        if (gradePoint >= 1.00) {
            totalEarnedCredits += credit;
        }
    }
    
    const currentGPA = currentCredits > 0 ? (currentGradePoints / currentCredits) : 0;
    
    // Calculate CGPA
    const totalCredits = completedCredits + currentCredits;
    const cgpa = totalCredits > 0 ? 
        ((previousCGPA * completedCredits + currentGradePoints) / totalCredits).toFixed(2) : 0;
    
    // Display results
    const resultBox = document.getElementById('cgpaResult');
    resultBox.innerHTML = `
        <h3 style="color: #f7931e; margin-bottom: 15px;">Cumulative Results</h3>
        <div class="result-item">
            <span class="result-label">Previous CGPA:</span>
            <span class="result-value">${previousCGPA.toFixed(2)}</span>
        </div>
        <div class="result-item">
            <span class="result-label">Previous Credits:</span>
            <span class="result-value">${completedCredits.toFixed(1)}</span>
        </div>
        <div class="result-item">
            <span class="result-label">Current Semester GPA:</span>
            <span class="result-value">${currentGPA.toFixed(2)}</span>
        </div>
        <div class="result-item">
            <span class="result-label">Current Semester Credits:</span>
            <span class="result-value">${currentCredits.toFixed(1)}</span>
        </div>
        <div class="result-item" style="margin-top: 15px; padding-top: 15px; border-top: 2px solid #f7931e;">
            <span class="result-label">Total Credits:</span>
            <span class="result-value">${totalCredits.toFixed(1)}</span>
        </div>
        <div class="result-item">
            <span class="result-label">Total Earned Credits:</span>
            <span class="result-value">${totalEarnedCredits.toFixed(1)}</span>
        </div>
        <div class="result-item" style="font-size: 1.2em;">
            <span class="result-label" style="font-size: 1.2em;">New CGPA:</span>
            <span class="result-value cgpa" style="font-size: 1.4em;">${cgpa}</span>
        </div>
    `;
    resultBox.classList.add('show');
}

// Initialize with one course
window.onload = function() {
    addCourse();
};
