release=$1

mkdir -p $release
rm -rf $release/web
rm -rf $release/config
rm -rf $release/scripts
rm -rf $release/db2-auth
mkdir -p $release/web
mkdir -p $release/config
mkdir -p $release/db2-auth
cp -r web/* $release/web/
cp -r config/leibniz/* $release/config/
cp -r db2-auth/* $release/db2-auth/
cp pluginDefinition.json $release/