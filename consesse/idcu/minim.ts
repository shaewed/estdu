type IncomeSources = 'salary' | 'investment' | 'rental' | 'freelance';

interface IncomeDetails {
  amount: number;
  dateReceived: Date;
  taxable: boolean;
}

type Incomes = Record<IncomeSources, IncomeDetails[]>;
