const { faker } = require('@faker-js/faker');
const fs = require('fs');

function generateRandomProject() {
  return {
    budgetStatus: {
      totalBudget: faker.finance.amount(50000, 200000, 0),
      spentToDate: faker.finance.amount(10000, 150000, 0),
      budgetRemaining: faker.finance.amount(5000, 100000, 0),
      costVariance: faker.finance.amount(-5000, 5000, 0),
      budgetAlert: faker.helpers.arrayElement(['enabled', 'disabled']),
    },
    scheduleAdherence: {
      projectStartDate: faker.date.past(),
      plannedEndDate: faker.date.future(),
      currentProgress: faker.number.int({ min: 10, max: 100 }),  // Updated line
      milestones: [
        {
          name: 'Design',
          dueDate: faker.date.recent(),
          status: faker.helpers.arrayElement(['Completed', 'On track', 'Delayed']),
        },
        {
          name: 'Development',
          dueDate: faker.date.future(),
          status: faker.helpers.arrayElement(['On track', 'Delayed']),
        },
      ],
      scheduleVariance: faker.number.int({ min: -5, max: 5 }),  // Updated line
    },
    resourceUtilization: {
      resourceAllocation: `${faker.name.firstName()} ${faker.name.lastName()}, ${faker.name.firstName()} ${faker.name.lastName()}`,
      plannedResourceHours: faker.number.int({ min: 300, max: 800 }),  // Updated line
      actualResourceHours: faker.number.int({ min: 200, max: 700 }),  // Updated line
      utilizationPercentage: faker.number.int({ min: 50, max: 100 }),  // Updated line
      capacityAlert: faker.helpers.arrayElement(['none', 'alert']),
    },
    scopeControl: {
      scopeDescription: faker.lorem.sentence(),
      changeRequests: [
        {
          description: 'Add feature X',
          impact: `${faker.number.int({ min: 1, max: 5 })} days, $${faker.number.int({ min: 1000, max: 5000 })}`,
          approvalStatus: faker.helpers.arrayElement(['Approved', 'Pending']),
        },
      ],
      scopeVariance: faker.number.int({ min: -5, max: 10 }),  // Updated line
    },
    kpiThresholds: {
      customKPITargets: {
        budget: faker.number.int({ min: 80, max: 100 }),  // Updated line
        utilization: faker.number.int({ min: 70, max: 100 }),  // Updated line
        taskCompletion: faker.number.int({ min: 80, max: 100 }),  // Updated line
      },
      kpiAlerts: {
        budget: 'enabled',
        utilization: 'enabled',
      },
    },
    kpiTracking: {
      kpiName: 'Project Performance',
      measurementPeriod: 'Weekly',
      owner: `${faker.name.firstName()} ${faker.name.lastName()}`,
      currentValue: faker.number.int({ min: 70, max: 100 }),  // Updated line
      targetValue: faker.number.int({ min: 80, max: 100 }),  // Updated line
      trendIndicator: faker.helpers.arrayElement(['up', 'down', 'steady']),
    },
  };
}

// Generate 15 projects
const projects = {};
for (let i = 4; i <= 15; i++) {
  projects[`project${i}`] = generateRandomProject();
}

// Save the generated data to a JSON file
fs.writeFileSync('projects.json', JSON.stringify({ projects }, null, 2), 'utf-8');

console.log('Projects data has been generated and saved to projects.json');
