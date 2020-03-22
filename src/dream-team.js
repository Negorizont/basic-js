module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let teamName = [];
  members.forEach(function(name) {
    if (typeof(name) === 'string') {
      for (let i=0; i<name.length;i++) {
        if (name[i] !== ' ') {
          teamName.push(name[i].toUpperCase());
          break;
        }
      }
    }
  });
  teamName = teamName.sort().join('');
  return teamName;
}; 