export const challenges = [
  {
    id: 1,
    slug: "tx-origin-misuse",
    title: "tx.origin Misuse",
    difficulty: "High",
    tags: ["Security", "AccessControl"],
    description:
      "This contract uses tx.origin for access control, which is insecure.",
    image: "/challanges/challange1.jpeg",
    code: `
// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;
contract Storage {
string s_name;
function change Name (string _name) public {
}
s_name = _name;
function getName() public view returns (string memory){ return s_name;
}
}
    `,
    hint: "tx.origin can be manipulated. Prefer msg.sender.",
  },
  {
    id: 2,
    slug: "tx-origin-misuse",
    title: "tx.origin Misuse",
    difficulty: "High",
    tags: ["Security", "AccessControl"],
    description:
      "This contract uses tx.origin for access control, which is insecure.",
    image: "/challanges/challange2.jpeg",
    code: `
// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;
contract Storage {
string s_name;
function changeName (string memory _name) public { s_name = _name;
}
function getName() public view returns (bool){
return s_name;
}
}
    `,
    hint: "tx.origin can be manipulated. Prefer msg.sender.",
  },
  {
    id: 3,
    slug: "tx-origin-misuse",
    title: "tx.origin Misuse",
    difficulty: "High",
    tags: ["Security", "AccessControl"],
    description:
      "This contract uses tx.origin for access control, which is insecure.",
    image: "/challanges/challange3.jpeg",
    code: `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract Company {
string public companyName = "FutureTech"; string public tagline = "Innovating the Decentralized World!";
}
    `,
    hint: "tx.origin can be manipulated. Prefer msg.sender.",
  },
  {
    id: 4,
    slug: "tx-origin-misuse",
    title: "tx.origin Misuse",
    difficulty: "High",
    tags: ["Security", "AccessControl"],
    description:
      "This contract uses tx.origin for access control, which is insecure.",
    image: "/challanges/challange4.jpeg",
    code: `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract GasTest {
uint256 public number;
function setNumber(uint256 _num) public {
number = _num;
}
    `,
    hint: "tx.origin can be manipulated. Prefer msg.sender.",
  },
  {
    id: 5,
    slug: "tx-origin-misuse",
    title: "tx.origin Misuse",
    difficulty: "High",
    tags: ["Security", "AccessControl"],
    description:
      "This contract uses tx.origin for access control, which is insecure.",
    image: "/challanges/challange5.jpeg",
    code: `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract Wallet {
mapping (address => uint256) public balances;
function deposit() public {
}
balances [msg.sender] += msg.value;
function withdraw(uint256 amount) public { require(balances [msg.sender] >= amount,
"Insufficient balance");
balances [msg.sender] -= amount;
payable(msg.sender).tranfer (amount);
}
}
    `,
    hint: "tx.origin can be manipulated. Prefer msg.sender.",
  },
  {
    id: 6,
    slug: "tx-origin-misuse",
    title: "tx.origin Misuse",
    difficulty: "High",
    tags: ["Security", "AccessControl"],
    description:
      "This contract uses tx.origin for access control, which is insecure.",
    image: "/challanges/challange6.jpeg",
    code: `
pragma solidity ^0.8.0;
contract Name Registry {
struct User {
string name;
}
mapping (address => User) public users;
function setName(string memory _name) public { users [msg.sender] = User(_name);
}
function getName (address _user) public view returns (string memory) {
return users [_user].name;
}
}
    `,
    hint: "tx.origin can be manipulated. Prefer msg.sender.",
  },
  {
    id: 8,
    slug: "tx-origin-misuse",
    title: "tx.origin Misuse",
    difficulty: "High",
    tags: ["Security", "AccessControl"],
    description:
      "This contract uses tx.origin for access control, which is insecure.",
    image: "/challanges/challange8.jpeg",
    code: `
// SPDX-License-Identifier: MIT pragma solidity ^0.8.0;
contract HiddenName {
string public storedName;
function set Name (string memory name) public { bytes memory temp = bytes(name);
if (temp.length > 0) {
storedName;
}
function getName() public view returns (string
memory) {
return storedName;
}
}
    `,
    hint: "tx.origin can be manipulated. Prefer msg.sender.",
  },
  {
    id: 9,
    slug: "tx-origin-misuse",
    title: "tx.origin Misuse",
    difficulty: "High",
    tags: ["Security", "AccessControl"],
    description:
      "This contract uses tx.origin for access control, which is insecure.",
    image: "/challanges/challange9.jpeg",
    code: `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract ArraySum {
// Array to store integers
uint[] public numbers;
// Function to add numbers to the array function addNumber (uint _number) public {
}
numbers.push(_number);
// Function to calculate the sum of all numbers using a loop
function calculateSum() public view returns
(uint) {
uint sum = 0;
for (uint i = 0; i < numbers.length; i++)
{
}
sum += numbers[i];
return sum;
}
    `,
    hint: "tx.origin can be manipulated. Prefer msg.sender.",
  },
  {
    id: 10,
    slug: "tx-origin-misuse",
    title: "tx.origin Misuse",
    difficulty: "High",
    tags: ["Security", "AccessControl"],
    description:
      "This contract uses tx.origin for access control, which is insecure.",
    image: "/challanges/challange10.jpeg",
    code: `
// SPDX-License-Identifier: MIT pragma solidity ^0.8.20;
contract Challenge10 {
address private immutable owner;
constructor() {
owner = msg.sender;
}
function updateData(uint _value) public view returns (uint) { require (msg.sender == owner, "Only owner can call"); return _value * 2;
}
function resetCounter() public view returns (string memory) { require(msg.sender == owner, "Only owner can call"); return "Counter reset";
}
function toggleStatus() public view returns (bool) { require(msg.sender == owner, "Only owner can call"); return true;
}
function getOwner() public view returns (address) { return owner;
}
}
    `,
    hint: "tx.origin can be manipulated. Prefer msg.sender.",
  },
  {
    id: 11,
    slug: "tx-origin-misuse",
    title: "tx.origin Misuse",
    difficulty: "High",
    tags: ["Security", "AccessControl"],
    description:
      "This contract uses tx.origin for access control, which is insecure.",
    image: "/challanges/challange11.jpeg",
    code: `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract MissingFunction {
address public owner;
constructor() {
owner = msg.sender;
}
function setOwner (address _newOwner) public {
owner = _newOwner;
}
    `,
    hint: "tx.origin can be manipulated. Prefer msg.sender.",
  },
  {
    id: 12,
    slug: "tx-origin-misuse",
    title: "tx.origin Misuse",
    difficulty: "High",
    tags: ["Security", "AccessControl"],
    description:
      "This contract uses tx.origin for access control, which is insecure.",
    image: "/challanges/challange12.jpeg",
    code: `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract FallbackIssue {
mapping (address => uint) public balances;
function deposit() public payable { balances [msg.sender] += msg.value;
}
function withdraw(uint _amount) public { require(balances [msg.sender] >= _amount,
"Insufficient balance");
}
}
payable (msg.sender).transfer (_amount); balances [msg.sender] -= _amount;
    `,
    hint: "tx.origin can be manipulated. Prefer msg.sender.",
  },
  {
    id: 13,
    slug: "tx-origin-misuse",
    title: "tx.origin Misuse",
    difficulty: "High",
    tags: ["Security", "AccessControl"],
    description:
      "This contract uses tx.origin for access control, which is insecure.",
    image: "/challanges/challange13.jpeg",
    code: `   
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract ReentrancyIssue {
mapping (address => uint) public balances;
function deposit() public payable {
}
balances [msg.sender] += msg.value;
function withdraw() public {
uint amount = balances[msg.sender]; require (amount > 0, "No balance to
withdraw");
(bool success, )
payable (msg.sender).call{value: amount}(""); require(success, "Transfer failed");
balances [msg.sender] -= amount;
}
}
    `,
    hint: "tx.origin can be manipulated. Prefer msg.sender.",
  },
  {
    id: 14,
    slug: "tx-origin-misuse",
    title: "tx.origin Misuse",
    difficulty: "High",
    tags: ["Security", "AccessControl"],
    description:
      "This contract uses tx.origin for access control, which is insecure.",
    image: "/challanges/challange14.jpeg",
    code: `
pragma solidity ^0.8.0;
contract VulnerableBank {
mapping (address => uint256) public balances;
function deposit() public payable {
balances [msg.sender] += msg.value;
}
function withdraw(uint256 amount) public {
require(tx.origin
allowed");
msg.sender, "Not
require(balances [msg.sender] >= amount,
"Insufficient balance");
balances [msg.sender] -= amount; payable(msg.sender).transfer (amount);
}
}
    `,
    hint: "tx.origin can be manipulated. Prefer msg.sender.",
  },
  {
    id: 15,
    slug: "tx-origin-misuse",
    title: "tx.origin Misuse",
    difficulty: "High",
    tags: ["Security", "AccessControl"],
    description:
      "This contract uses tx.origin for access control, which is insecure.",
    image: "/challanges/challange15.jpeg",
    code: `
// Intended to be upgradeable via proxy pragma solidity ^0.8.0;
import "@openzeppelin/contracts- upgradeable/proxy/utils/Initializable.sol";
contract AdminWallet is Initializable {
address public admin;
constructor() {
}
admin = msg.sender;
function withdraw (address payable to, uint256 amount) public {
require(msg.sender == admin, "Not
authorized");
to.transfer (amount);
}
}
receive() external payable {}
    `,
    hint: "tx.origin can be manipulated. Prefer msg.sender.",
  },
  {
    id: 16,
    slug: "tx-origin-misuse",
    title: "tx.origin Misuse",
    difficulty: "High",
    tags: ["Security", "AccessControl"],
    description:
      "This contract uses tx.origin for access control, which is insecure.",
    image: "/challanges/challange16.jpeg",
    code: ` 
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import
"@openzeppelin/contracts/access/AccessControl.sol";
contract Voting is AccessControl {
bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
constructor (address admin) {
}
_grantRole(ADMIN_ROLE, admin);
function createProposal (string memory proposal) public onlyRole (ADMIN_ROLE) {
}
}
// Proposal creation logic
    `,
    hint: "tx.origin can be manipulated. Prefer msg.sender.",
  },
  {
    id: 17,
    slug: "tx-origin-misuse",
    title: "tx.origin Misuse",
    difficulty: "High",
    tags: ["Security", "AccessControl"],
    description:
      "This contract uses tx.origin for access control, which is insecure.",
    image: "/challanges/challange17.jpeg",
    code: `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import
"@openzeppelin/contracts/access/AccessControl.sol";
contract Protocol Manager is AccessControl { bytes32 public constant STRATEGIST_ROLE = keccak256("STRATEGIST_ROLE");
constructor(address strategist, address
backupAdmin) {
_grantRole(DEFAULT_ADMIN_ROLE, strategist);
_grantRole(DEFAULT_ADMIN_ROLE,
backupAdmin);
_grantRole(STRATEGIST_ROLE, strategist);
}
function executeStrategy() public
onlyRole (STRATEGIST_ROLE) {
}
// Strategy execution logic
function emergency Exit() public onlyRole (DEFAULT_ADMIN_ROLE) {
}
// Some sensitive operation
  }
  }
    `,
    hint: "tx.origin can be manipulated. Prefer msg.sender.",
  },
  {
    id: 18,
    slug: "tx-origin-misuse",
    title: "tx.origin Misuse",
    difficulty: "High",
    tags: ["Security", "AccessControl"],
    description:
      "This contract uses tx.origin for access control, which is insecure.",
    image: "/challanges/challange18.jpeg",
    code: `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract StorageBug {
struct User {
uint256 balance;
bool isActive;
}
}
mapping (address => User) public users;
function activateUser() public {
}
User memory u = users [msg.sender]; U.isActive = true;
function deposit() public payable { users [msg.sender]. balance += msg.value;
}
    `,
    hint: "tx.origin can be manipulated. Prefer msg.sender.",
  },
];
