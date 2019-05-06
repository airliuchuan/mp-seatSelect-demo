
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: "",
    seat: [],
    seats: [{
      "cineSeatId": "14342",
      "cinemaId": "1",
      "xCoord": "1",
      "yCoord": "1",
      "loveseats": "",
      "row": "1",
      "column": "1",
      "status": "ok",
      "type": "danren",
      "areaId": "1"
    }, {
      "cineSeatId": "14342",
      "cinemaId": "1",
      "xCoord": "2",
      "yCoord": "1",
      "loveseats": "",
      "row": "2",
      "column": "1",
      "status": "ok",
      "type": "danren",
      "areaId": "1"
    }, {
      "cineSeatId": "14342",
      "cinemaId": "1",
      "xCoord": "3",
      "yCoord": "1",
      "loveseats": "",
      "row": "3",
      "column": "1",
      "status": "booked",
      "type": "danren",
      "areaId": "1"
    }, {
      "cineSeatId": "14342",
      "cinemaId": "1",
      "xCoord": "4",
      "yCoord": "1",
      "loveseats": "",
      "row": "4",
      "column": "1",
      "status": "ok",
      "type": "danren",
      "areaId": "1"
    }, {
      "cineSeatId": "14342",
      "cinemaId": "1",
      "xCoord": "5",
      "yCoord": "1",
      "loveseats": "",
      "row": "5",
      "column": "1",
      "status": "ok",
      "type": "danren",
      "areaId": "1"
    }, {
      "cineSeatId": "14342",
      "cinemaId": "1",
      "xCoord": "6",
      "yCoord": "1",
      "loveseats": "",
      "row": "6",
      "column": "1",
      "status": "ok",
      "type": "danren",
      "areaId": "1"
    }, {
      "cineSeatId": "14342",
      "cinemaId": "1",
      "xCoord": "7",
      "yCoord": "1",
      "loveseats": "",
      "row": "7",
      "column": "1",
      "status": "ok",
      "type": "danren",
      "areaId": "1"
    }, {
      "cineSeatId": "14342",
      "cinemaId": "1",
      "xCoord": "8",
      "yCoord": "1",
      "loveseats": "",
      "row": "8",
      "column": "1",
      "status": "ok",
      "type": "danren",
      "areaId": "1"
    }, {
      "cineSeatId": "14342",
      "cinemaId": "1",
      "xCoord": "9",
      "yCoord": "1",
      "loveseats": "",
      "row": "0",
      "column": "0",
      "status": "ok",
      "type": "danren",
      "areaId": "1"
    }, {
      "cineSeatId": "14342",
      "cinemaId": "1",
      "xCoord": "10",
      "yCoord": "1",
      "loveseats": "",
      "row": "0",
      "column": "0",
      "status": "ok",
      "type": "danren",
      "areaId": "1"
    }, {
      "cineSeatId": "14342",
      "cinemaId": "1",
      "xCoord": "11",
      "yCoord": "1",
      "loveseats": "",
      "row": "0",
      "column": "0",
      "status": "ok",
      "type": "danren",
      "areaId": "1"
    }, {
      "cineSeatId": "14342",
      "cinemaId": "1",
      "xCoord": "12",
      "yCoord": "1",
      "loveseats": "",
      "row": "0",
      "column": "0",
      "status": "ok",
      "type": "danren",
      "areaId": "1"
    }, {
      "cineSeatId": "14342",
      "cinemaId": "1",
      "xCoord": "13",
      "yCoord": "1",
      "loveseats": "",
      "row": "0",
      "column": "0",
      "status": "ok",
      "type": "danren",
      "areaId": "1"
    }, {
      "cineSeatId": "14342",
      "cinemaId": "1",
      "xCoord": "1",
      "yCoord": "2",
      "loveseats": "",
      "row": "1",
      "column": "2",
      "status": "ok",
      "type": "danren",
      "areaId": "1"
    }, {
      "cineSeatId": "14342",
      "cinemaId": "1",
      "xCoord": "2",
      "yCoord": "2",
      "loveseats": "",
      "row": "2",
      "column": "2",
      "status": "ok",
      "type": "danren",
      "areaId": "1"
    }, {
      "cineSeatId": "14342",
      "cinemaId": "1",
      "xCoord": "3",
      "yCoord": "2",
      "loveseats": "",
      "row": "3",
      "column": "2",
      "status": "booked",
      "type": "road",
      "areaId": "1"
    }, {
      "cineSeatId": "14342",
      "cinemaId": "1",
      "xCoord": "4",
      "yCoord": "2",
      "loveseats": "",
      "row": "4",
      "column": "2",
      "status": "ok",
      "type": "danren",
      "areaId": "1"
    }, {
      "cineSeatId": "14342",
      "cinemaId": "1",
      "xCoord": "1",
      "yCoord": "3",
      "loveseats": "",
      "row": "1",
      "column": "3",
      "status": "ok",
      "type": "road",
      "areaId": "1"
    }, {
      "cineSeatId": "14342",
      "cinemaId": "1",
      "xCoord": "2",
      "yCoord": "3",
      "loveseats": "",
      "row": "2",
      "column": "3",
      "status": "ok",
      "type": "danren",
      "areaId": "1"
    }, {
      "cineSeatId": "14342",
      "cinemaId": "1",
      "xCoord": "3",
      "yCoord": "3",
      "loveseats": "",
      "row": "3",
      "column": "3",
      "status": "ok",
      "type": "road",
      "areaId": "1"
    }, {
      "cineSeatId": "14342",
      "cinemaId": "1",
      "xCoord": "4",
      "yCoord": "3",
      "loveseats": "",
      "row": "4",
      "column": "3",
      "status": "ok",
      "type": "danren",
      "areaId": "1"
    }, {
      "cineSeatId": "14342",
      "cinemaId": "1",
      "xCoord": "1",
      "yCoord": "4",
      "loveseats": "",
      "row": "1",
      "column": "4",
      "status": "ok",
      "type": "danren",
      "areaId": "1"
    }, {
      "cineSeatId": "14342",
      "cinemaId": "1",
      "xCoord": "2",
      "yCoord": "4",
      "loveseats": "",
      "row": "2",
      "column": "4",
      "status": "ok",
      "type": "road",
      "areaId": "1"
    }, {
      "cineSeatId": "14342",
      "cinemaId": "1",
      "xCoord": "3",
      "yCoord": "4",
      "loveseats": "",
      "row": "3",
      "column": "4",
      "status": "ok",
      "type": "danren",
      "areaId": "1"
    }, {
      "cineSeatId": "14342",
      "cinemaId": "1",
      "xCoord": "4",
      "yCoord": "4",
      "loveseats": "",
      "row": "4",
      "column": "4",
      "status": "ok",
      "type": "danren",
      "areaId": "1"
    }],
    xyArray: [],
    isSelected: Boolean,
    isSeat: Boolean,
    imgSrc: "../assets/icon/seatPre.png",
    imgRoad: "",
    lineTop: 0,
    lineHeight: "",
    lineArray: [],
    reset: false,
    columnNumber: 0,
    selectX: 0,
    selectY: 0,
    selectSeatList: [],
    totalMoney: "",
    totalMoneyFloat: 0.00,
    movie: [],
    price: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let movie = JSON.parse(options.movie);
    let price = movie.price;
    this.setData({
      price: price,
      movie: movie
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    let xyArray = [];
    let xArray = [];
    let yArray = [];
    for (let a = 0; a < this.data.seats.length; a++) {
      if (yArray.indexOf(this.data.seats[a].yCoord) == -1) {
        yArray.push(this.data.seats[a].yCoord);
      }
    }
    console.log(yArray);
    let totalArray = [];
    for (let b = 0; b < yArray.length; b++) {
      let xxA = [];
      for (let c = 0; c < this.data.seats.length; c++) {
        if (yArray[b] == this.data.seats[c].yCoord) {
          if (this.data.seats[c].type == "danren") {
            if (this.data.seats[c].status == "ok") {
              this.data.seats[c].iconSrc = "../assets/icon/seatPre.png";
            } else {
              this.data.seats[c].iconSrc = "../assets/icon/seatDone.png";
            }
          } else if (this.data.seats[c].type == "road") {
            this.data.seats[c].iconSrc = "";
          }
          this.data.seats[c].select = false;
          xxA.push(this.data.seats[c]);
        }
      }
      totalArray.push(xxA);
    }
    this.setData({
      seat: totalArray,
      lineArray: yArray,
      columnNumber: yArray.length
    })
    console.log(totalArray);

    const query = wx.createSelectorQuery()
    query.select('#seatView').boundingClientRect()
    query.exec((res) => {
      console.log(res);
      let height = res[0].height;
      let newHeight = height / yArray.length;
      let top = res[0].top;
      this.setData({
        lineHeight: newHeight,
        lineTop: top
      })
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  onChange(e) {
    const query = wx.createSelectorQuery()
    query.select('#seatView').boundingClientRect()
    query.exec((res) => {
      console.log(res);
      let height = res[0].height;
      let top = res[0].top;
      let newHeight = height / this.data.columnNumber;
      this.setData({
        lineHeight: newHeight,
        lineTop: top
      })
    })
  },
  onScale(e) {
    const query = wx.createSelectorQuery()
    query.select('#seatView').boundingClientRect()
    query.exec((res) => {
      console.log(res);
      let height = res[0].height;
      let top = res[0].top;
      let newHeight = height / this.data.columnNumber;
      this.setData({
        lineHeight: newHeight,
        lineTop: top
      })
    })
  },
  selectSeat(e) {
    let x = e.currentTarget.dataset.index + 1;
    let y = e.currentTarget.dataset.ix + 1;
    this.setData({
      selectX: x,
      selectY: y
    })
    let totalArray = this.data.seat;
    for (var a = 0; a < totalArray.length; a++) {
      for (var b = 0; b < totalArray[a].length; b++) {
        let item = totalArray[a][b];
        if (item.yCoord == x && item.xCoord == y &&
          item.status == 'ok' && item.type != 'road') {
          let totalMoney = 0.00;
          let totalMoneyStr = "";
          if (item.select == true) {
            item.select = false;
            item.iconSrc = "../assets/icon/seatPre.png";
            let seatInfo = item.column + "排" + item.row + "座";
            this.remove(seatInfo);
            totalMoney = parseFloat(this.data.totalMoneyFloat) - parseFloat(this.data.price);
            totalMoneyStr = totalMoney.toString();
            if (totalMoney == 0) {
              totalMoneyStr = "";
            }
          } else {
            if (this.data.selectSeatList.length == 6) {
              wx.showToast({
                title: '最多选择6个座位',
                icon: 'none',
                duration: 1000,
                mask: true
              })
            } else {
              item.select = true;
              item.iconSrc = "../assets/icon/selectIcon.png";
              let seat = {};
              let seatInfo = item.column + "排" + item.row + "座";
              seat.seatInfo = seatInfo;
              seat.x = item.xCoord;
              seat.y = item.yCoord;
              seat.index = item.xCoord + item.yCoord;
              this.data.selectSeatList.push(seat);
              totalMoney = parseFloat(this.data.totalMoneyFloat) + parseFloat(this.data.price);
              totalMoneyStr = totalMoney.toString();
            }
          }
          this.setData({
            selectSeatList: this.data.selectSeatList,
            totalMoney: totalMoneyStr,
            totalMoneyFloat: totalMoney
          })
        }
      }
    }
    this.setData({
      seat: totalArray
    })
  },
  remove(val) {
    for (var a = 0; a < this.data.selectSeatList.length; a++) {
      if (this.data.selectSeatList[a].seatInfo == val) {
        this.data.selectSeatList.splice(a, 1);
        break;
      }
    }
    this.setData({
      selectSeatList: this.data.selectSeatList
    })
  },
  cancelSeat(e) {
    let index = e.currentTarget.dataset.index;
    let x = e.currentTarget.dataset.x;
    let y = e.currentTarget.dataset.y;
    let totalArray = this.data.seat;
    for (var a = 0; a < totalArray.length; a++) {
      for (var b = 0; b < totalArray[a].length; b++) {
        if (totalArray[a][b].xCoord == x && totalArray[a][b].yCoord == y) {
          totalArray[a][b].select = false;
          totalArray[a][b].iconSrc = "../assets/icon/seatPre.png";
          break;
        }
      }
    }
    for (var c = 0; c < this.data.selectSeatList.length; c++) {
      if (this.data.selectSeatList[c].index == index) {
        this.data.selectSeatList.splice(c, 1);
        break;
      }
    }
    let totalMoney = this.data.totalMoneyFloat - parseFloat(this.data.price);
    let totalMoneyStr = totalMoney.toString();
    if (totalMoney == 0) {
      totalMoneyStr = "";
    }
    this.setData({
      seat: totalArray,
      selectSeatList: this.data.selectSeatList,
      totalMoney: totalMoneyStr,
      totalMoneyFloat: totalMoney
    })
  },
  submit() {
    wx.navigateTo({

    })
  }

})