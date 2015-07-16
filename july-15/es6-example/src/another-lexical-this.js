var bob = {
  name: 'bob',
  friends: ['janet', 'henry'],
  printFriends: function() {
    this.friends.forEach(function(f) {
      console.log(this.name + ' ' + f);
    })
  }
}

bob.printFriends();
