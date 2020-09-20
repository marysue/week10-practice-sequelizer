'use strict';
module.exports = (sequelize, DataTypes) => {
  const Enrollment = sequelize.define('Enrollment', {
    personId: DataTypes.INTEGER,
    courseId: DataTypes.INTEGER
  }, {});
  Enrollment.associate = function(models) {
    // associations can be defined here
   //no associations because it's the join table only
  };
  return Enrollment;
};
