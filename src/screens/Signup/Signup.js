import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React, {useState, useEffect, useRef} from 'react'
import IMAGESOURCE from '../../constants/Image_Source_Url'
import main_styles from '../../assets/styles/main_styles'
import Authen_String from '../../constants/Authen_String'
import Colors from '../../assets/colors/Color'
import SolidBgButton from '../../components/Button/SolidBgButton'
const Signup = ({ navigation, route }) => {

  


  const submitSignUp = () =>{

  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={main_styles.viewAuthen}>
          <Image source={IMAGESOURCE.LOGO_CYCLER} style={main_styles.logoAuthen} />
          <Text style={main_styles.textWelcomeAuthen}>
            {Authen_String.CREATEACCOUNT.toUpperCase()}
          </Text>
          <View style={{ flexDirection: 'row', width: '100%' }}>
            <TextInput
              placeholder={Authen_String.FNAME}
              returnKeyType='next'
              autoCapitalize='words'
              placeholderTextColor={Colors.DARK}
              style={main_styles.textFieldAuthen}
              underlineColorAndroid={Colors.DARK} />
            <TextInput
              placeholder={Authen_String.LNAME}
              returnKeyType='next'
              autoCapitalize='words'
              placeholderTextColor={Colors.DARK}
              style={main_styles.textFieldAuthen}
              underlineColorAndroid={Colors.DARK} />
          </View>

          <TextInput
            placeholder={Authen_String.PHONENUM}
            returnKeyType='next'
            keyboardType='phone-pad'
            placeholderTextColor={Colors.DARK}
            style={main_styles.textFieldAuthen}
            underlineColorAndroid={Colors.DARK} />

          <TextInput
            placeholder={Authen_String.MAILADD}
            returnKeyType='next'
            keyboardType='email-address'
            placeholderTextColor={Colors.DARK}
            style={main_styles.textFieldAuthen}
            underlineColorAndroid={Colors.DARK} />

          <TextInput
            placeholder={Authen_String.PASSWORD}
            returnKeyType='next'
            secureTextEntry={true}
            placeholderTextColor={Colors.DARK}
            style={main_styles.textFieldAuthen}
            underlineColorAndroid={Colors.DARK} />

          <TextInput
            placeholder={Authen_String.CPASSWORD}
            returnKeyType='next'
            secureTextEntry={true}
            placeholderTextColor={Colors.DARK}
            style={main_styles.textFieldAuthen}
            underlineColorAndroid={Colors.DARK} />
            <SolidBgButton
            
                marginV={15}
                active={()=>{submitSignUp()}}
                backgroundSolidColor={Colors.PRIMARY}
                titleButton={Authen_String.GO.toUpperCase()}
                colorText={Colors.DARK}/>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Signup