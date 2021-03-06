import React from 'react';
import { Header, Icon } from 'react-native-elements';
import { IHeaderAppProps } from '@components/HeaderApp/IHeaderAppProps';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { headerAppStyle } from '@components/HeaderApp/styles';
import { useNavigation } from '@react-navigation/native';
import { color } from '@theme/color';
import { useTranslation } from 'react-i18next';
import { language } from '@environments/enviroment.language';

const HeaderApp = ({ back = false }: IHeaderAppProps) => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const styles = headerAppStyle;
  const logo = require('@images/logo.png');

  const centerComponent = (
    <View>
      <Image style={styles.logo} resizeMode="contain" source={logo} />
    </View>
  );

  return (
    <Header
      backgroundColor={color.header}
      leftComponent={
        <>
          {back && (
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.backButtonContainer}
              onPress={() => navigation.goBack()}>
              <Icon
                color="#fff"
                name="chevron-back"
                type="ionicon"
                style={{ marginRight: 5 }}
              />
              <Text style={styles.backTitle}>{t(language.goBack)}</Text>
            </TouchableOpacity>
          )}
        </>
      }
      centerComponent={centerComponent}
    />
  );
};

export default React.memo(HeaderApp, (prevProps, nextProps) => {
  return prevProps === nextProps;
});
