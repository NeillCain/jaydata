import $data, { $C, Guard, Container, Exception, MemberDefinition } from 'jaydata/core';

$data.SqLiteConverter = {
    fromDb: {
        '$data.Byte': $data.Container.proxyConverter,
        '$data.SByte': $data.Container.proxyConverter,
        '$data.Decimal': $data.Container.proxyConverter,
        '$data.Float': $data.Container.proxyConverter,
        '$data.Int16': $data.Container.proxyConverter,
        '$data.Int64': $data.Container.proxyConverter,
        "$data.Integer": $data.Container.proxyConverter,
        "$data.Int32": $data.Container.proxyConverter,
        "$data.Number": $data.Container.proxyConverter,
        "$data.Date": function (dbData) { return dbData != null ? new Date(dbData) : dbData; },
        "$data.DateTimeOffset": function (dbData) { return dbData != null ? new Date(dbData) : dbData; },
        "$data.Time": $data.Container.proxyConverter,
        "$data.String": $data.Container.proxyConverter,
        "$data.Boolean": function (b) { return b === 1 ? true : false; },
        "$data.Blob": function(b){ return b ? $data.Container.convertTo(atob(b), $data.Blob) : b; },
        "$data.Array": function () {
            if (arguments.length == 0) return [];
            return arguments[0] ? JSON.parse(arguments[0]) : undefined;
        },
        "$data.Object": function(v){
            try{ return JSON.parse(v); }catch(err){ return v; }
        },
        "$data.Guid": function (g) { return g ? $data.parseGuid(g).toString() : g; },
        '$data.GeographyPoint': function (g) { if (g) { return new $data.GeographyPoint(JSON.parse(g)); } return g; },
        '$data.GeographyLineString': function (g) { if (g) { return new $data.GeographyLineString(JSON.parse(g)); } return g; },
        '$data.GeographyPolygon': function (g) { if (g) { return new $data.GeographyPolygon(JSON.parse(g)); } return g; },
        '$data.GeographyMultiPoint': function (g) { if (g) { return new $data.GeographyMultiPoint(JSON.parse(g)); } return g; },
        '$data.GeographyMultiLineString': function (g) { if (g) { return new $data.GeographyMultiLineString(JSON.parse(g)); } return g; },
        '$data.GeographyMultiPolygon': function (g) { if (g) { return new $data.GeographyMultiPolygon(JSON.parse(g)); } return g; },
        '$data.GeographyCollection': function (g) { if (g) { return new $data.GeographyCollection(JSON.parse(g)); } return g; },
        '$data.GeometryPoint': function (g) { if (g) { return new $data.GeometryPoint(JSON.parse(g)); } return g; },
        '$data.GeometryLineString': function (g) { if (g) { return new $data.GeometryLineString(JSON.parse(g)); } return g; },
        '$data.GeometryPolygon': function (g) { if (g) { return new $data.GeometryPolygon(JSON.parse(g)); } return g; },
        '$data.GeometryMultiPoint': function (g) { if (g) { return new $data.GeometryMultiPoint(JSON.parse(g)); } return g; },
        '$data.GeometryMultiLineString': function (g) { if (g) { return new $data.GeometryMultiLineString(JSON.parse(g)); } return g; },
        '$data.GeometryMultiPolygon': function (g) { if (g) { return new $data.GeometryMultiPolygon(JSON.parse(g)); } return g; },
        '$data.GeometryCollection': function (g) { if (g) { return new $data.GeometryCollection(JSON.parse(g)); } return g; }
    },
    toDb: {
        '$data.Byte': $data.Container.proxyConverter,
        '$data.SByte': $data.Container.proxyConverter,
        '$data.Decimal': $data.Container.proxyConverter,
        '$data.Float': $data.Container.proxyConverter,
        '$data.Int16': $data.Container.proxyConverter,
        '$data.Int64': $data.Container.proxyConverter,
        "$data.Integer": $data.Container.proxyConverter,
        "$data.Int32": $data.Container.proxyConverter,
        "$data.Number": $data.Container.proxyConverter,
        "$data.Date": function (date) { return date ? date.valueOf() : null; },
        "$data.DateTimeOffset": function (date) { return date ? date.valueOf() : null; },
        "$data.Time": $data.Container.proxyConverter,
        "$data.String": $data.Container.proxyConverter,
        "$data.Boolean": function (b) { return b ? 1 : 0; },
        "$data.Blob": function(b){ return b ? $data.Blob.toBase64(b) : b; },
        "$data.Array": function (arr) { return arr ? JSON.stringify(arr) : arr; },
        "$data.Guid": function (g) { return g ? g.toString() : g; },
        "$data.Object": function (value) { if (value === null) { return null; } else { JSON.stringify(value); } },
        '$data.GeographyPoint': function (g) { if (g) { return JSON.stringify(g); } return g; },
        '$data.GeographyLineString': function (g) { if (g) { return JSON.stringify(g); } return g; },
        '$data.GeographyPolygon': function (g) { if (g) { return JSON.stringify(g); } return g; },
        '$data.GeographyMultiPoint': function (g) { if (g) { return JSON.stringify(g); } return g; },
        '$data.GeographyMultiLineString': function (g) { if (g) { return JSON.stringify(g); } return g; },
        '$data.GeographyMultiPolygon': function (g) { if (g) { return JSON.stringify(g); } return g; },
        '$data.GeographyCollection': function (g) { if (g) { return JSON.stringify(g); } return g; },
        '$data.GeometryPoint': function (g) { if (g) { return JSON.stringify(g); } return g; },
        '$data.GeometryLineString': function (g) { if (g) { return JSON.stringify(g); } return g; },
        '$data.GeometryPolygon': function (g) { if (g) { return JSON.stringify(g); } return g; },
        '$data.GeometryMultiPoint': function (g) { if (g) { return JSON.stringify(g); } return g; },
        '$data.GeometryMultiLineString': function (g) { if (g) { return JSON.stringify(g); } return g; },
        '$data.GeometryMultiPolygon': function (g) { if (g) { return JSON.stringify(g); } return g; },
        '$data.GeometryCollection': function (g) { if (g) { return JSON.stringify(g); } return g; }
    }
};

$data.SqLiteFieldMapping = {
    '$data.Byte': "INTEGER",
    '$data.SByte': "INTEGER",
    '$data.Decimal': "TEXT",
    '$data.Float': "REAL",
    '$data.Int16': "INTEGER",
    '$data.Int64': "TEXT",
    "$data.Integer": "INTEGER",
    "$data.Int32": "INTEGER",
    "$data.Number": "REAL",
    "$data.Date": "REAL",
    "$data.Time": "TEXT",
    "$data.DateTimeOffset": "REAL",
    "$data.String": "TEXT",
    "$data.Boolean": "INTEGER",
    "$data.Blob": "BLOB",
    "$data.Array": "TEXT",
    "$data.Guid": "TEXT",
    "$data.Object": "TEXT",
    '$data.GeographyPoint': "TEXT",
    '$data.GeographyLineString': "TEXT",
    '$data.GeographyPolygon': "TEXT",
    '$data.GeographyMultiPoint': "TEXT",
    '$data.GeographyMultiLineString': "TEXT",
    '$data.GeographyMultiPolygon': "TEXT",
    '$data.GeographyCollection': "TEXT",
    '$data.GeometryPoint': "TEXT",
    '$data.GeometryLineString': "TEXT",
    '$data.GeometryPolygon': "TEXT",
    '$data.GeometryMultiPoint': "TEXT",
    '$data.GeometryMultiLineString': "TEXT",
    '$data.GeometryMultiPolygon': "TEXT",
    '$data.GeometryCollection': "TEXT"
};
