import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import { HttpServices } from 'sharedLibs/src/services/http.services';
import { commonStyles } from 'sharedLibs/src/style'

import { useAppDispatch, useAppSelector } from '../hooks';
import { childApp1_decrement, childApp1_increment, childApp1_setValue } from '../reducers/CounterReducer';

const Page2 = () => {
  const counter = useAppSelector(state => state.childApp1.childApp1.counter)
  const dispatch = useAppDispatch()
  const [title, setTitle] = useState("Test");

  function getTitle() {
    let httpServices = new HttpServices();
    httpServices.getURL().then((response)=>{
      setTitle(response.data.title)
    })
  }
  
  getTitle();

  return (
    <>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={commonStyles.container}>
            <View>
              <Text style={commonStyles.titles}>childApp1 Page 2</Text>
            </View>

            <View style={commonStyles.container}>
              <Text style={commonStyles.content}>
                  Test Services : {title}
              </Text>
            </View>


            <View>
              <Text style={commonStyles.content}>
                  Test Redux Counter: {counter}
              </Text>
            </View>

            <Button
                title="Increase Counter"
                onPress={() =>
                  dispatch(childApp1_increment())
                }
              />

              <Button
                title="derease Counter"
                onPress={() =>
                  dispatch(childApp1_decrement())
                }
              />

              <Button
                title="set Counter"
                onPress={() =>
                  dispatch(childApp1_setValue(99))
                }
              />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Page2;
