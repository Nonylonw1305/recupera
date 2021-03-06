import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_ntc_caracteristica_fisica extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_fisico: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ds_pele: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_cabelo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_cor_cabelo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_complemento: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_ntc_caracteristica_fisica',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_fisico" },
        ]
      },
    ]
  });
  }
}
