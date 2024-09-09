import { faker } from '@faker-js/faker';

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
      projectStartDate: faker.date.past(1),
      plannedEndDate: faker.date.future(1),
      currentProgress: faker.datatype.number({ min: 10, max: 100 }),
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
      scheduleVariance: faker.datatype.number({ min: -5, max: 5 }),
    },
    resourceUtilization: {
      resourceAllocation: `${faker.name.firstName()} ${faker.name.lastName()}, ${faker.name.firstName()} ${faker.name.lastName()}`,
      plannedResourceHours: faker.datatype.number({ min: 300, max: 800 }),
      actualResourceHours: faker.datatype.number({ min: 200, max: 700 }),
      utilizationPercentage: faker.datatype.number({ min: 50, max: 100 }),
      capacityAlert: faker.helpers.arrayElement(['none', 'alert']),
    },
    scopeControl: {
      scopeDescription: faker.lorem.sentence(),
      changeRequests: [
        {
          description: 'Add feature X',
          impact: `${faker.datatype.number({ min: 1, max: 5 })} days, $${faker.datatype.number({ min: 1000, max: 5000 })}`,
          approvalStatus: faker.helpers.arrayElement(['Approved', 'Pending']),
        },
      ],
      scopeVariance: faker.datatype.number({ min: -5, max: 10 }),
    },
    kpiThresholds: {
      customKPITargets: {
        budget: faker.datatype.number({ min: 80, max: 100 }),
        utilization: faker.datatype.number({ min: 70, max: 100 }),
        taskCompletion: faker.datatype.number({ min: 80, max: 100 }),
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
      currentValue: faker.datatype.number({ min: 70, max: 100 }),
      targetValue: faker.datatype.number({ min: 80, max: 100 }),
      trendIndicator: faker.helpers.arrayElement(['up', 'down', 'steady']),
    },
  };
}

// Generate 15 projects
const projects = {};
for (let i = 4; i <= 15; i++) {
  projects[`project${i}`] = generateRandomProject();
}
console.log(JSON.stringify({ projects }, null, 2));
