const Controller = artifacts.require('Controller');
const Factory = artifacts.require('Factory');
const Dope = artifacts.require('Dope');
const Lock = artifacts.require('Lock');
const Viewer = artifacts.require('Viewer');

const MockERC20 = artifacts.require('MockBEP20');

module.exports = function (deployer) {


    /*
    let dopeInstance;
    deployer.deploy(Dope, "0x17142514BBb117aa14B80e081eC4423770cCB464").then(function(instance) {
        dopeInstance = instance;
        return deployer.deploy(Factory);
    }).then(function() {
        return deployer.deploy(Lock, Dope.address);
    }).then(function() {
        return deployer.deploy(Controller, Dope.address);
    }).then(function() {
        return deployer.deploy(Viewer, Dope.address);
    }).then(function() {
        return dopeInstance.setFactory(Factory.address);
    }).then(function() {
        return dopeInstance.setLock(Lock.address);
    }).then(function() {
        return dopeInstance.setController(Controller.address);
    }).catch(function(error) {
        console.log(error);
    });

     */


    deployer.deploy(MockERC20, "KDR", "KDR", "1000000000000000000").then(function() {
        return deployer.deploy(Lock, "0x8d24c23c6d68bac9394a22401cbcfecf62d9227e");
    }).catch(function(error) {
        console.log(error);
    })

};
