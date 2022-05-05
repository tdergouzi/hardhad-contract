// SPDX-License-Identifier: MIT

pragma solidity >=0.6.6;

import "./modules/Initializable.sol";

contract Example is Initializable {
    address public owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "Example: caller is not owner");
        _;
    }

    function initialize() external initializer {
        owner = msg.sender;
    }

    function setOwner(address _owner) external onlyOwner {
        require(_owner != owner, "Example: no diff");
        owner = _owner;
    }
}