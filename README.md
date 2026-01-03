# UIU CGPA Calculator

A web-based GPA and CGPA calculator designed specifically for United International University (UIU) students. This tool helps students calculate their semester GPA and cumulative GPA (CGPA) based on their grades and credit hours.

## Features

✨ **Semester GPA Calculation**
- Add multiple courses with their credit hours
- Select grades or enter marks percentage
- Automatic conversion of marks to grade points
- Detailed breakdown of all courses with grades and credits

📊 **CGPA Calculation**
- Calculate cumulative GPA based on previous semesters
- Factor in completed credits from previous semesters
- Combine current semester performance with academic history

📋 **Grading Policy Reference**
- Built-in grading scale table following UIU standards
- Shows grade points, percentage ranges, and assessment levels
- Grades from A (4.00) to F (0.00)

🎯 **User-Friendly Interface**
- Clean, intuitive design with responsive layout
- Easy course management (add/remove courses)
- Real-time grade selection with optional marks entry
- Clear result display with detailed breakdowns

## Grading Scale

| Grade | Grade Point | Marks (%) | Assessment |
|-------|-------------|-----------|------------|
| A     | 4.00        | 90 – 100  | Outstanding |
| A-    | 3.67        | 86 – 89   | Excellent   |
| B+    | 3.33        | 82 – 85   | Very Good   |
| B     | 3.00        | 78 – 81   | Good        |
| B-    | 2.67        | 74 – 77   | Above Average |
| C+    | 2.33        | 70 – 73   | Average     |
| C     | 2.00        | 66 – 69   | Below Average |
| C-    | 1.67        | 62 – 65   | Poor        |
| D+    | 1.33        | 58 – 61   | Very Poor   |
| D     | 1.00        | 55 – 57   | Pass        |
| F     | 0.00        | 0 – 54    | Fail        |

## How to Use

### Calculating Semester GPA

1. Click **"+ Add Course"** to add a new course
2. Enter the course name (optional)
3. Enter the credit hours for the course
4. Select your grade or choose "Enter Marks %" to input percentage
5. Repeat for all courses in your semester
6. Click **"Calculate GPA"** to see your results

### Calculating CGPA

1. Complete the semester GPA calculation above
2. In the "Calculate CGPA" section:
   - Enter your **Previous CGPA** (from all previous semesters)
   - Enter your **Completed Credits** (total credits from previous semesters)
3. Click **"Calculate CGPA"** to view your cumulative GPA

## Technical Details

### Files Structure
- **index.html** - Main HTML structure and grading policy table
- **style.css** - Responsive styling with modern UI design
- **script.js** - JavaScript logic for calculations and interactivity

### Key Functions

**`addCourse()`** - Adds a new course input form
**`removeCourse(id)`** - Removes a course from the calculator
**`marksToGradePoint(marks)`** - Converts percentage marks to grade points
**`calculateGPA()`** - Calculates semester GPA with detailed results
**`calculateCGPA()`** - Calculates cumulative GPA based on previous academic history

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and flexbox/grid
- **Vanilla JavaScript** - Pure JS (no dependencies)

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Getting Started

1. Clone the repository
2. Open `index.html` in your web browser
3. Start calculating your GPA!

No installation or server required - it's a completely client-side application.

## Features Explained

### Flexible Grade Entry
- Select from predefined grades (A, A-, B+, etc.)
- Or enter raw marks percentage for automatic grade conversion
- Marks are automatically mapped to the nearest grade bracket

### Credit Hours Support
- Enter partial credits (e.g., 1.5, 3.5)
- Calculates GPA weighted by credit hours
- Displays both attempted and earned credits

### Comprehensive Results
- Shows all courses with grades and credit values
- Displays total credits attempted
- Shows earned credits (courses with grades D or higher)
- Clearly indicates semester GPA

### CGPA Calculation
- Accounts for previous semesters' cumulative performance
- Combines previous CGPA with current semester GPA
- Weighs both by their respective credit counts

## Notes

- Grades below D (F grade) do not count toward earned credits
- GPA is calculated as the weighted average of grade points
- CGPA represents your cumulative performance across all semesters
- All calculations follow UIU's grading standards

## License

This project is open source and available for educational use.

## Contributing

Feel free to fork, modify, and improve this calculator. Contributions are welcome!

---

**Made for UIU Students | Simplify Your GPA Calculations**
