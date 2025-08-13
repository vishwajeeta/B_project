export const challenges = [
  {
    id: 14,
    slug: 'tx-origin-misuse',
    title: 'tx.origin Misuse',
    difficulty: 'High',
    tags: ['Security', 'AccessControl'],
    description: 'This contract uses tx.origin for access control, which is insecure.',
    code: `contract Example { 
    address public owner;
    constructor() { 
    owner = tx.origin; 
    } 
    }`,
    hint: 'tx.origin can be manipulated. Prefer msg.sender.',
  },
];