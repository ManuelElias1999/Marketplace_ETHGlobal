// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

contract Marketplace {
    struct Product {
        string id;
        string name;
        uint price;
        address owner;
        string [] codes;
    }

    address payable manager;
    
    mapping (string => Product) private products;
    
    event ProductAdded(string id, string name, uint price, address owner);
    event ProductModified(string id, string name, uint price, address owner);
    event ProductSold(string id, string code, uint availableAmountCode);
    event ProductRemoved(string _id);

    modifier onlyOwner(address owner){
        require(owner == msg.sender, "You are not the owner of this product.");
        _;
    }

    constructor(){
        manager = payable(msg.sender);
    }

    function addProduct(string memory _id, string memory _name, uint _price, string [] memory _codes) public {
        products[_id] = Product(_id, _name, _price, msg.sender, _codes);
        emit ProductAdded(_id, _name, _price, msg.sender);
    }
    
    function modifyProduct(string memory _id, string memory _name, uint _price) public onlyOwner(products[_id].owner){
        Product storage product = products[_id];
        product.name = _name;
        product.price = _price;
        emit ProductModified(_id, _name, _price, msg.sender);
    }
    
    function buyProduct(string memory _id, uint _stock) public payable {
        require(msg.sender != products[_id].owner, "The owner can't buy his own product.");
        require(msg.value >= (products[_id].price)*99/100, "The amount sent is not equal to the price of the product.");
        require(_stock == products[_id].codes.length || _stock > 0, "The available stock is incorrect.");
        Product storage product = products[_id];
        if(msg.value > (product.price)){
            payable(msg.sender).transfer(msg.value-(product.price));
        }
        address payable ownerPayable = payable(product.owner);
        ownerPayable.transfer((product.price)*95/100);
        manager.transfer((product.price)*5/100);
        string memory code = product.codes[_stock-1];
        product.codes.pop();
        emit ProductSold(_id, code, product.codes.length);
    }
    
    function getProduct(string memory _id) public view returns (string memory, string memory, uint, address) {
        Product memory product = products[_id];
        return (product.id, product.name, product.price, product.owner);
    }

    function removeProduct(string memory _id) public onlyOwner(products[_id].owner){
        delete products[_id];
        emit ProductRemoved(_id);
    }
}