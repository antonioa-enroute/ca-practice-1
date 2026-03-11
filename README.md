# Prerequisites

- npm

# Install steps

1. Clone repository
2. Run `cd ca-practice-1`
3. Install dependencies with `npm ci`
4. Run `npm start` to run the example code
5. Run `npm test` to run the unit tess

# Run CI

1. Create a PR with your changes (use main as base branch)
2. Verify your code passes tests

# Running autofix-workflow

(With access permissions)
1. Go to Actions
2. Click on 'codex-auto-fix' workflow
3. Click on Run Workflow
4. Use main as workflow from, on the input put your branch name e.g 'feature/new functions'

# How grading works
- Tests passing: 6 points
- Tests unchanged: 2 points
- Small change (less than 80 changed lines): 2 points