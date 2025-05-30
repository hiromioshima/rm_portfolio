$(function() {
	$('body').fadeIn(1200); //秒かけてフェードイン！
});





// ローディングアニメーション
// タイマー処理
  $(window).on('load', function () {

  // ローダー終了
  function end_loading() {
    $('.loading').fadeOut(1200);
  }
  // テキスト表示
  function show_loading_logo() {
    $('.loading_logo').fadeIn(1000);
  }
  // テキスト非表示
  function hide_loading_logo() {
    $('.loading_logo').fadeOut(2000);
  }
  
    // 処理①
    setTimeout(function () {
      show_loading_logo();
    }, 100)
    // 処理②
    setTimeout(function () {
      hide_loading_logo();
    }, 1500)
    // 処理③
    setTimeout(function () {
      end_loading();
    }, 3000)
});


// ローディング画面初回のみ表示
const sessionKey = "accesed";
const sessionValue = true;

if (!sessionStorage.getItem(sessionKey)) {
	//1回だけ実行させたい処理を書く（今回はローディングの処理）
	setTimeout(function(){
	$('#js-loading').fadeOut(2000);
	},2000);

	//sessionStorageに保存
	sessionStorage.setItem(sessionKey, sessionValue);
}else{
	console.log('アクセス済みだよ');
  jQuery(function () {
	$('#js-loading').css('display','none');
	});
}







// ハンバーガーメニュー
$(function(){
        $('.hamburger,.sp-nav a').on('click',function(){
            $('.hamburger').toggleClass('open');
            $('.sp-nav').fadeToggle();
        });
      });




// sp トップページのワークス スライダー
$('.top_mockup_wrap1').slick({
    autoplay: true, // 自動でスクロール
    autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
    speed: 5000, // スライドが流れる速度を設定
    cssEase: "linear", // スライドの流れ方を等速に設定
    slidesToShow: 4, // 表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, // 矢印非表示
    pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1, // 画面幅767px以下でスライド1枚表示
        }
      }
    ]
  });


// sp ワークス一覧の絞り込み
$(function () {
    // 変数を要素をセット
    var $filter = $('.filter-list [data-filter]');
        $item = $('.filter-item [data-item]');
      
    // カテゴリをクリックしたら
    $filter.click(function (e) {
      var $this = $(this);
        
      // クリックしたカテゴリにクラスを付与
      $filter.removeClass('is-active');  // (removeClassは削除の意味)
      $this.addClass('is-active');    // (addClassは特定の条件下でclassを追加)
      
      // クリックした要素のdata属性を取得
      var $filterItem = $this.attr('data-filter');
      
      // データ属性が all なら全ての要素を表示
      if ($filterItem == 'all') {
        $item.removeClass('is-active').fadeOut().promise().done(function () {
          $item.addClass('is-active').fadeIn();
        });
      // all 以外の場合は、クリックした要素のdata属性の値を同じ値のアイテムを表示
      } else {
        $item.removeClass('is-active').fadeOut().promise().done(function () {
          $item.filter('[data-item = "' + $filterItem + '"]').addClass('is-active').fadeIn();
        });
      }
  
    });


 //遷移時のカテゴリーの絞り
 // URLを取得
  let url = new URL(window.location.href);

 // URLSearchParamsオブジェクトを取得 （URLにパラメーターが入るという意味）
  let params = url.searchParams;

 // getメソッド
  // 絞りボタンallを押した場合
  if(params.get('cat')){                 //パラメーターに値が入っていたら
    if(params.get('cat')=='all'){       //もしその値がallだったら
      console.log(params.get('cat'));    //そのカテゴリーを出します
      $('.all').trigger('click');        //allのボタンを押した時に動く（擬似クリック）
    }
  }

  // 絞りボタンwebを押した場合
  if(params.get('cat')){                  //パラメーターに値が入っていたら
    if(params.get('cat')=='web'){        //もしその値がwebだったら
      console.log(params.get('cat'));    //そのカテゴリーを出します
      $('.web').trigger('click');        //webのボタンを押した時に動く（擬似クリック）
    }
  }

  // 絞りボタンbannerを押した場合
  if(params.get('cat')){
    if(params.get('cat')=='banner'){
      console.log(params.get('cat'));
      $('.banner').trigger('click');
    }
  }

  // 絞りボタンgraphicを押した場合
  if(params.get('cat')){
    if(params.get('cat')=='graphic'){
      console.log(params.get('cat'));
      $('.graphic').trigger('click');
    }
  }

});