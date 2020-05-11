import * as React from 'react';
import { DataTable } from 'react-native-paper';
import { StyleSheet} from 'react-native';

const max_number = 100000000;

//intialize store array for table
var cur_confirm = new Array();
var new_confirm = new Array();
var total_confirm = new Array();
var total_cure = new Array();
var total_die = new Array();
// get from back end
var provinces_length = 6;
var provinces = ["美国", "意大利", "西班牙", "日本", "韩国", "德国"];
for (var i=0; i<provinces_length; i++) {
  cur_confirm[i] = Math.floor(Math.random()*1000);
  new_confirm[i] = Math.floor(Math.random()*1000);
  total_confirm[i] = Math.floor(Math.random()*1000);
  total_cure[i] = Math.floor(Math.random()*1000);
  total_die[i] = Math.floor(Math.random()*1000);
}

// for table view
var idx_ = new Array();
for (var i=0; i<provinces_length; i++) {
  idx_[i] = i;
}
var same = 0;
var now_descending = 0;
var last = 'null';

export default class ChinaDataTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {idx: idx_};
  }
  // get descending or increasing order of attr_num, store them into idx
  // idx as state, can refresh table automatically
  my_sort(attr_num, attr_name) {
    if (attr_name == last && now_descending == 1) {
      now_descending = 0;
      last = attr_name;
      // increasing
      var already = new Array();
      for (var i=0; i<provinces_length; i++) {
        already[i] = 0;
      }
      for (var i=0; i < provinces_length; i++ ) {
        var min_val = max_number;
        var min_idx = -1;
        for (var j=0; j<provinces_length; j++) {
          if (already[j] == 0 && attr_num[j] < min_val) {
            min_val = attr_num[j];
            min_idx = j;
          }
        }
        idx_[i] = min_idx;
        already[min_idx] = 1;
      }
    } 
    else {
      now_descending = 1;
      last = attr_name;
      // descending
      var already = new Array();
      for (var i=0; i<provinces_length; i++) {
        already[i] = 0;
      }
      for (var i=0; i < provinces_length; i++ ) {
        var max_val = -1;
        var max_idx = -1;
        for (var j=0; j<provinces_length; j++) {
          if (already[j] == 0 && attr_num[j] > max_val) {
            max_val = attr_num[j];
            max_idx = j;
          }
        }
        idx_[i] = max_idx;
        already[max_idx] = 1;
      }
    }   
    this.setState({idx: idx_});
  }
  // use tableview

  render() {
    return (
      <DataTable>
        <DataTable.Header>
          <DataTable.Title >国家</DataTable.Title>
          <DataTable.Title onPress={() => this.my_sort(cur_confirm)} numeric>现存确诊</DataTable.Title>
          <DataTable.Title onPress={() => this.my_sort(new_confirm)} numeric>新增确诊</DataTable.Title>
          <DataTable.Title onPress={() => this.my_sort(total_confirm)} numeric>累计确诊</DataTable.Title>
          <DataTable.Title onPress={() => this.my_sort(total_cure)} numeric>累计治愈</DataTable.Title>
          <DataTable.Title onPress={() => this.my_sort(total_die)} numeric>累计死亡</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[0]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[0]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[0]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[0]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[0]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[0]]}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[1]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[1]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[1]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[1]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[1]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[1]]}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[2]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[2]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[2]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[2]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[2]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[2]]}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[3]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[3]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[3]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[3]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[3]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[3]]}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[4]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[4]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[4]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[4]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[4]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[4]]}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[5]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[5]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[5]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[5]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[5]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[5]]}</DataTable.Cell>
        </DataTable.Row>

      </DataTable>
    );
  }
}