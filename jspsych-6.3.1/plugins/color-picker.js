jsPsych.plugins["color-picker"] = (function() {

  var plugin = {};

  plugin.info = {
    name: "color-picker",
    description:'',
    parameters: {
      stimulus: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Stimulus',
        default: undefined,
        description: 'The HTML string to be displayed'
      },
      choices: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Choices',
        default: undefined,
        array: true,
        description: 'The labels for the buttons.'
      },
      button_html: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Button HTML',
        default: '<button class="jspsych-btn">%choice%</button>',
        array: true,
        description: 'The html of the button. Can create own style.'
      },
      prompt: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Prompt',
        default: null,
        description: 'Any content here will be displayed under the button.'
      },
      stimulus_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Stimulus duration',
        default: null,
        description: 'How long to hide the stimulus.'
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'How long to show the trial.'
      },
      margin_vertical: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Margin vertical',
        default: '0px',
        description: 'The vertical margin of the button.'
      },
      margin_horizontal: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Margin horizontal',
        default: '8px',
        description: 'The horizontal margin of the button.'
      },
      response_ends_trial: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Response ends trial',
        default: true,
        description: 'If true, then trial will end when user responds.'
      },
    }
  }

  plugin.trial = function(display_element, trial) {

    //display stimulus
    var html = '<div id="jspsych-html-button-response-stimulus">';

    console.log('show stimulus: '+trial.stimulus);
    //刺激の提示は、if-elseで提示する。
    //練習問題：practice1
    //正式問題：problem1     を書いてください
    if (trial.stimulus == 'practice1') {
      html += '<div class = "container">'
      html += '<div class="row"><div class="col">'
      html += '<h1>練習問題</h1>'
      html += '<div>'
      html += '<table class = "table"><tbody><tr><td>1.<span data-jscolor="">这是</span><span data-jscolor="">苹果</span></td>'
      html += '<td><span data-jscolor>これは</span><span data-jscolor="">リンゴです</td></tr>'

      html += '<tr><td>2.<span data-jscolor="">这是</span><span data-jscolor="">香蕉</span></p>'
      html += '<td><span data-jscolor>これは</span><span data-jscolor="">バナナです</td></tr>'

      html += '<tr><td>3.<span data-jscolor="">那是</span><span data-jscolor="">香蕉</span></p>'
      html += '<td><span data-jscolor>それは</span><span data-jscolor="">バナナです</td></tr></tbody></table>'



      html += '<p><a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1" id= "hint01" onclick = "provide_time(this.id)">?</a>'

      //html += '<div class="row">'
      html += '<div class="col"><div class="collapse multi-collapse" id="multiCollapseExample1"> <div class="card card-body">'
      html += 'まず、この言語を理解するために、言語の構造を分析しましょう。 色を付けて、文の構造をまとめましょう。'
      html += '</div>'

      html += '</div></div></div>'
      //html += '</div>'

      html += '<br><br><br><p>Q1:日本語に訳しなさい</p>'
      html += '<p><button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2" id= "hint02" onclick = "provide_time(this.id)">Q1?</button></p>'
      html += '<div class="col"><div class="collapse multi-collapse" id="multiCollapseExample2"><div class="card card-body">'
      html += '自分が着色している結果を参考にして、答えてみてください。'
      html += '</div></div></div> '
      html += '<p>那是苹果：<input></input></div>'

      html += '</div></div>'

    }else if (trial.stimulus == 'problem1') {

      // Problem is in the first row, and the hint also in the first row
      // problems are at the left, hints are at the right. in the different column
      html += '<div class="contianer"><div class="container">'
      html += '<h1>問題2. </h1>'
      html += '<p><strong>以下にハクン語の文章とその和訳がある:</strong></p>'
      html += '<div class="row"><div class="col"><div>'
      html += '<div><p><a role="button" class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" id = "hint_0" onclick = "provide_time(this.id)">？</a></p><div class="collapse" id="collapseExample">'
      html += '<div class="card card-body">まず、この言語の構造を分析しましょう。 色を付けて、文の構造をまとめましょう。</div></div></div>'
      html += '<p>1. <span data-jscolor="">ŋa</span> <span data-jscolor="">ka</span><span data-jscolor=""> kɤ</span><span data-jscolor=""> ne</span>　 ̶　<span data-jscolor="">私は</span><span data-jscolor="">行</span><span data-jscolor="">く</span><span data-jscolor="">か?</span></p>'
      html += '<p>2. <span data-jscolor="">nɤ</span> <span data-jscolor="">ʒip</span><span data-jscolor=""> tuʔ</span><span data-jscolor=""> ne</span>　 ̶　<span data-jscolor="">あなたは</span><span data-jscolor="">眠</span><span data-jscolor="">った</span><span data-jscolor="">か?<span></p>'
      html += '<p>3. <span data-jscolor="">ŋabə</span> <span data-jscolor="">ati</span><span data-jscolor=""> lapkʰi</span><span data-jscolor=""> tɤʔ</span><span data-jscolor=""> ne</span>　 ̶　<span data-jscolor="">私は</span><span data-jscolor="">彼を</span><span data-jscolor="">見</span><span data-jscolor="">た</span><span data-jscolor="">か?</span></p>'
      html += '<p>4. <span data-jscolor="">nirum</span><span data-jscolor=""> kəmə</span><span data-jscolor=""> nuʔrum</span><span data-jscolor=""> cʰam</span><span data-jscolor=""> ki</span><span data-jscolor=""> ne</span>　 ̶　<span data-jscolor="">私達は</span><span data-jscolor="">あなた達を</span><span data-jscolor="">知</span><span data-jscolor="">っている</span><span data-jscolor="">か?</span></p>'
      html += '<p>5. <span data-jscolor="">nɤbə</span> <span data-jscolor=""> ŋa</span><span data-jscolor=""> lapkʰi</span><span data-jscolor=""> rɤ</span><span data-jscolor=""> ne</span>　 ̶　<span data-jscolor="">あなたは</span><span data-jscolor="">私を</span><span data-jscolor="">見</span><span data-jscolor="">る</span><span data-jscolor="">か?</span></p>'
      html += '<p>6. <span data-jscolor="">tarum</span><span data-jscolor=""> kəmə</span><span data-jscolor=""> nɤ</span><span data-jscolor=""> lan</span><span data-jscolor=""> tʰu</span><span data-jscolor=""> ne</span>　 ̶　<span data-jscolor="">彼らは</span><span data-jscolor="">あなたを</span><span data-jscolor="">殴</span><span data-jscolor="">った</span><span data-jscolor="">か?</span></p>'
      html += '<p>7. <span data-jscolor="">nuʔrum</span><span data-jscolor=""> kəmə</span><span data-jscolor=""> ati</span><span data-jscolor=""> lapkʰi</span> <span data-jscolor=""> kan</span><span data-jscolor=""> ne</span>　 ̶　<span data-jscolor="">あなた達は</span><span data-jscolor="">彼を</span><span data-jscolor="">見</span><span data-jscolor="">る</span><span data-jscolor="">か?</span></p>'
      html += '<p>8. <span data-jscolor="">nɤbə</span><span data-jscolor=""> ati</span><span data-jscolor=""> cʰam</span><span data-jscolor=""> tuʔ</span><span data-jscolor=""> ne</span>　 ̶　<span data-jscolor="">あなたは</span><span data-jscolor="">彼を</span><span data-jscolor="">知</span><span data-jscolor="">っていた</span><span data-jscolor="">か?</span></p>'
      html += '<p>9. <span data-jscolor="">tarum</span><span data-jscolor=""> kəmə</span><span data-jscolor=""> nirum</span><span data-jscolor=""> lapkʰi</span><span data-jscolor=""> ri</span><span data-jscolor=""> ne</span>　 ̶　<span data-jscolor="">彼らは</span><span data-jscolor="">私達を</span><span data-jscolor="">見</span><span data-jscolor="">る</span><span data-jscolor="">か?</span></p>'
      html += '<p>10.<span data-jscolor=""> ati</span><span data-jscolor=""> kəmə</span><span data-jscolor=""> ŋa</span><span data-jscolor=""> lapkʰi</span><span data-jscolor=""> tʰɤ </span><span data-jscolor="">ne</span>　 ̶　<span data-jscolor="">彼は</span><span data-jscolor="">私を</span><span data-jscolor="">見</span><span data-jscolor="">た</span><span data-jscolor="">か?</span></p>'
      html += '</div></div>'

      // ここから、ヒントのコードです。
      html += '<div class="col"><a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1" id= "hint1" onclick = "provide_time(this.id)">ヒント1</a>'
      html += '<div class="collapse multi-collapse" id="multiCollapseExample1">'
      html += '<div class="card card-body">2番と8番の文の中で、同じところを探して着色してください。</div>'
      html += '</div>'

      html += '<a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample2" id= "hint2" onclick = "provide_time(this.id)">ヒント2</a>'
      html += '<div class="collapse multi-collapse" id="multiCollapseExample2">'
      html += '<div class="card card-body">そして、5番を見て、2番と8番の文と比べて、同じところを着色してください。</div>'
      html += '</div>'

      html += '<a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample3" role="button" aria-expanded="false" aria-controls="multiCollapseExample3" id= "hint3" onclick = "provide_time(this.id)">ヒント3</a>'
      html += '<div class="collapse multi-collapse" id="multiCollapseExample3">'
      html += '<div class="card card-body">次は、3番を見て、以前に着色した文と比べて、似ている文字のところも同じ色を付けてください。</div>'
      html += '</div>'

      html += '<a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample4" role="button" aria-expanded="false" aria-controls="multiCollapseExample4" id= "hint4" onclick = "provide_time(this.id)">ヒント4</a>'
      html += '<div class="collapse multi-collapse" id="multiCollapseExample4">'
      html += '<div class="card card-body">2、3、6、8、10番の文は、過去形なので、5番の文と比べて、辞書形のところを探しましょう。</div>'
      html += '</div>'

      html += '<a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample5" role="button" aria-expanded="false" aria-controls="multiCollapseExample5" id= "hint5" onclick = "provide_time(this.id)">ヒント5</a>'
      html += '<div class="collapse multi-collapse" id="multiCollapseExample5">'
      html += '<div class="card card-body">7番と9番の文も、他の文と比べて、同じ部分に同じ色を付けてください。</div>'
      html += '</div>'

      html += '<a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample6" role="button" aria-expanded="false" aria-controls="multiCollapseExample6" id= "hint6" onclick = "provide_time(this.id)">ヒント6</a>'
      html += '<div class="collapse multi-collapse" id="multiCollapseExample6">'
      html += '<div class="card card-body">動詞の辞書形と変化形を表示するところはきちんと分けていますか。</div>'
      html += '</div>'


      html += '<a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample7" role="button" aria-expanded="false" aria-controls="multiCollapseExample7" id= "hint7" onclick = "provide_time(this.id)">ヒント7</a>'
      html += '<div class="collapse multi-collapse" id="multiCollapseExample7">'
      html += '<div class="card card-body">残っている1番と4番は、他の文と同じところで同じ色を付けて下さい。</div>'
      html += '</div>'


      html += '<a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample8" role="button" aria-expanded="false" aria-controls="multiCollapseExample8" id= "hint8" onclick = "provide_time(this.id)">ヒント8</a>'
      html += '<div class="collapse multi-collapse" id="multiCollapseExample8">'
      html += '<div class="card card-body">動詞のところも、同じ動詞で同じ色を付けましょう。</div>'
      html += '</div>'

      html += '<a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample9" role="button" aria-expanded="false" aria-controls="multiCollapseExample9" id= "hint9" onclick = "provide_time(this.id)">ヒント9</a>'
      html += '<div class="collapse multi-collapse" id="multiCollapseExample9">'
      html += '<div class="card card-body">最後は、述語の部分を無視して、主語と目的語を見てみて、同じところで色を付けてください。</div>'
      html += '</div>'

      html += '</div></div>'

      //second row (I put the table here)
      html += '<div class="row"><div class="col">'

      html += '<style type="text/css">'
      html += 'table.tableizer-table {font-size: 12px; border: 1px solid #CCC; font-family: Arial, Helvetica, sans-serif;}'
      html += '.tableizer-table td {padding: 4px;margin: 3px; border: 1px solid #CCC;}'
      html += '.tableizer-table th {background-color: #104E8B;color: #CCC; font-weight: bold; }'
      html += '</style>'

      html += '<style type="text/css">'
      html += '.tg { border-collapse: collapse; border-spacing: 0; }'
      html += '.tg td {border-color: black; border-style: solid; border-width: 1px; font-family: Arial, sans-serif; font-size: 14px; overflow: hidden; padding: 10px 5px; word-break: normal; }'
      html += '.tg th {border-color: black; border-style: solid; border-width: 1px; font-family: Arial, sans-serif; font-size: 14px; font-weight: normal; overflow: hidden; padding: 10px 5px; word-break: normal; }'
      html += '.tg .tg-0lax {text-align: left;vertical-align: top}'
      html += '</style>'

      //ここから、表のコードです。
        html += '<table class="tableizer-table">'
        html += '<thead><tr class="tableizer-firstrow">'
        html += '<th></th><th>私を</th><th>私達を</th> <th>あなたを</th><th>あなた達を</th> <th>彼を</th> <th>彼らを</th>'
        html += '</tr></thead>'
        html += '<tbody>'
        html += '<tr><td>私は</td>'
        html += '<td><input style="border:0px;" id = "table11"></td><td><input style="border:0px;" id = "table12"></td><td><input style="border:0px;" id = "table13"></td><td><input style="border:0px;" id = "table14"></td><td><input style="border:0px;" id = "table15"></td><td><input style="border:0px;" id = "table16"></td>'
        html += '</tr><tr>'

        html += '<td>私達は</td>'
        html += '<td><input style="border:0px;" id = "table21"></td><td><input style="border:0px;" id = "table22"></td><td><input style="border:0px;" id = "table23"></td><td><input style="border:0px;" id = "table24"></td><td><input style="border:0px;" id = "table25"></td><td><input style="border:0px;" id = "table26"></td>'
        html += '</tr><tr>'

        html += '<td>あなたは</td>'
        html += '<td><input style="border:0px;" id = "table31"></td><td><input style="border:0px;" id = "table32"></td><td><input style="border:0px;" id = "table33"></td><td><input style="border:0px;" id = "table34"></td><td><input style="border:0px;" id = "table35"></td><td><input style="border:0px;" id = "table36"></td>'
        html += '</tr><tr>'

        html += '<td>あなた達は</td>'
        html += '<td><input style="border:0px;" id = "table41"></td><td><input style="border:0px;" id = "table42"></td><td><input style="border:0px;" id = "table43"></td><td><input style="border:0px;" id = "table44"></td><td><input style="border:0px;" id = "table45"></td><td><input style="border:0px;" id = "table46"></td>'
        html += '</tr><tr>'

        html += '<td>彼は</td>'
        html += '<td><input style="border:0px;" id = "table51"></td><td><input style="border:0px;" id = "table52"></td><td><input style="border:0px;" id = "table53"></td><td><input style="border:0px;" id = "table54"></td><td><input style="border:0px;" id = "table55"></td><td><input style="border:0px;" id = "table56"></td>'
        html += '</tr>'

        html += '<tr>'
        html += '<td>彼らは</td>'
        html += '<td><input style="border:0px;" id = "table61"></td><td><input style="border:0px;" id = "table62"></td><td><input style="border:0px;" id = "table63"></td><td><input style="border:0px;" id = "table64"></td><td><input style="border:0px;" id = "table65"></td><td><input style="border:0px;" id = "table66"></td>'
        html += '</tr>'

        html += '</tbody></table>'


      html +=          '<p><a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample21" role="button" aria-expanded="false" aria-controls="multiCollapseExample21" id= "hint21" onclick = "provide_time(this.id)">この表は？</a>'
      html +=             '<div class="collapse multi-collapse" id="multiCollapseExample21">'
      html +=               '<div class="card card-body">'
      html +=                 '主語と目的語の関係を簡単に理解するために、表を作りましょう！まず、今は知っている主語と目的語の組み合わせを入力しましょう！'
      html +=               '</div>'
      html +=             '</div>'
      html +=             '<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample22" aria-expanded="false" aria-controls="multiCollapseExample22" id= "hint22" onclick = "provide_time(this.id)">表の書き方のヒント</button>'
      html +=             '<div class="collapse multi-collapse" id="multiCollapseExample22">'
      html +=               '<div class="card card-body">'
      html +=                 '知っている主語と目的語は入力した後、表の他の枠も同じ規則で埋めてみてください。'
      html +=               '</div>'
      html +=             '</div>'
      html +=           '</div>'

      html +=         '</div>'

      html +=       '<div class="row">'
      html +=         '<div class="col">'

      html +=           '<h1>質問：</h1>'
      html +=           '<p><strong>(a)日本語に訳しなさい:</strong></p>'
      html +=           '<p>1. nɤ ʒip ku ne</p>'
      html +=           '<input type = "answer" id = "answer31" />'
      html +=           '<a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample31" role="button" aria-expanded="false" aria-controls="multiCollapseExample31" id= "hint31" onclick = "provide_time(this.id)">Q1ヒント</a>'
      html +=           '<div class="collapse multi-collapse" id="multiCollapseExample31">'
      html +=             '<div class="card card-body">'
      html +=               '質問1の文は、上記の例の文と比べると、知っている部分がありますね。そこから解きましょう。'
      html +=             '</div>'
      html +=           '</div>'


      html +=           '<p>2. ati kəmə nirum lapkʰi tʰi ne</p>'
      html +=           '<input type = "answer" id = "answer32" />'
      html +=           '<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample32" aria-expanded="false" aria-controls="multiCollapseExample32" id= "hint32" onclick = "provide_time(this.id)">Q2ヒント</button>'
      html +=           '<div class="collapse multi-collapse" id="multiCollapseExample32">'
      html +=             '<div class="card card-body">'
      html +=               '質問2の文も、上記の例文と同じところがありますが、主語と目的語については例文を利用して考えましょう。'
      html +=             '</div>'
      html +=           '</div>'


      html +=           '<p>3. tarum kəmə nuʔrum cʰam ran ne</p>'
      html +=           '<input type = "answer" id = "answer33" />'
      html +=           '<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample33" aria-expanded="false" aria-controls="multiCollapseExample33" id= "hint33" onclick = "provide_time(this.id)">Q3ヒント</button>'
      html +=           '<div class="collapse multi-collapse" id="multiCollapseExample33">'
      html +=             '<div class="card card-body">'
      html +=               '質問3の解き方も同じです。例文を利用して解きましょう。'
      html +=             '</div>'
      html +=           '</div>'


      html +=           '<p>4. nirum kəmə tarum lan ki ne</p>'
      html +=           '<input type = "answer" id = "answer34" />'
      html +=           '<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample34" aria-expanded="false" aria-controls="multiCollapseExample34" id= "hint34" onclick = "provide_time(this.id)">Q4ヒント</button>'
      html +=           '<div class="collapse multi-collapse" id="multiCollapseExample34">'
      html +=             '<div class="card card-body">'
      html +=               '主語と動詞の部分は例文を用いるとわかりますが、目的語は表を参照して解きましょう。'
      html +=             '</div>'
      html +=           '</div>'


      html +=         '<p>5. nirum kəmə nɤ cʰam tiʔ ne</p>'
      html +=           '<input type = "answer" id = "answer35" />'
      html +=           '<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample35" aria-expanded="false" aria-controls="multiCollapseExample35" id= "hint35" onclick = "provide_time(this.id)">Q5ヒント</button>'
      html +=           '<div class="collapse multi-collapse" id="multiCollapseExample35">'
      html +=             '<div class="card card-body">'
      html +=               '質問5の動詞は例文で探せますが、主語と目的語は表を参照してください。'
      html +=             '</div>'
      html +=           '</div>'



      html +=           '<p>6. nirum ka tiʔ ne</p>'
      html +=           '<input type = "answer" id = "answer36" />'
      html +=           '<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample36" aria-expanded="false" aria-controls="multiCollapseExample36" id= "hint36" onclick = "provide_time(this.id)">Q6ヒント</button>'
      html +=           '<div class="collapse multi-collapse" id="multiCollapseExample36">'
      html +=             '<div class="card card-body">'
      html +=               '質問6も動詞をわかっていますが、主語と目的語は表を利用して答えましょう。'
      html +=             '</div>'
      html +=           '</div>'
    

             
      html +=           '<p><strong>(b)ハクン語に訳しなさい:</strong></p>'
      html +=           '<p>7. 私はあなたを殴ったか?</p>'
      html +=           '<input type = "answer" id = "answer37" />'
      html +=           '<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample37" aria-expanded="false" aria-controls="multiCollapseExample37" id= "hint37" onclick = "provide_time(this.id)">Q7ヒント</button>'
      html +=           '<div class="collapse multi-collapse" id="multiCollapseExample37">'
      html +=             '<div class="card card-body">'
      html +=               '主語と目的語は表を利用して答えましょう。'
      html +=             '</div>'
      html +=           '</div>'


      html +=           '<p>8. 彼らは私を見たか?</p>'
      html +=           '<input type = "answer" id = "answer38" />'
      html +=           '<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample38" aria-expanded="false" aria-controls="multiCollapseExample38" id= "hint38" onclick = "provide_time(this.id)">Q8ヒント</button>'
      html +=           '<div class="collapse multi-collapse" id="multiCollapseExample38">'
      html +=             '<div class="card card-body">'
      html +=               '質問8の文も、上記の例文と同じ過去形ですが、主語と目的語については例文を利用して考えましょう。'
      html +=             '</div>'
      html +=           '</div>'


      html +=           '<p>9. 彼はあなたを知っているか?</p>'
      html +=           '<input type = "answer" id = "answer39" />'
      html +=           '<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample39" aria-expanded="false" aria-controls="multiCollapseExample39" id= "hint39" onclick = "provide_time(this.id)">Q9ヒント</button>'
      html +=           '<div class="collapse multi-collapse" id="multiCollapseExample39">'
      html +=             '<div class="card card-body">'
      html +=               '質問9の解き方も質問3と似ていますね。'
      html +=             '</div>'
      html +=           '</div>'


      html +=           '<p>10. あなた達は眠るか?</p>'
      html +=           '<input type = "answer" id = "answer40" />'
      html +=           '<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample40" aria-expanded="false" aria-controls="multiCollapseExample40" id= "hint40" onclick = "provide_time(this.id)">Q10ヒント</button>'
      html +=           '<div class="collapse multi-collapse" id="multiCollapseExample40">'
      html +=             '<div class="card card-body">'
      html +=               '主語は表を参照して解きましょう。'
      html +=             '</div>'
      html +=           '</div>'


  

      // html +=         '</div>'

      // html +=       '</div>'




      html +=     '</div>'
      html +=   '</div>'
      html += '<p>必ずデータを保存してください。</p><button onclick = "answerStorage()"> データを保存する </button>'
      html +=   '</div>'




    }

    //end of stimulus
    html += '</div>';



    //display_element.innerHTML += html;  //display the html
    //jscolor.install();   //install jscolor to use their colors


   


    //display buttons
    var buttons = [];
    if (Array.isArray(trial.button_html)) {
      if (trial.button_html.length == trial.choices.length) {
        buttons = trial.button_html;
      } else {
        console.error('Error in html-button-response plugin. The length of the button_html array does not equal the length of the choices array');
      }
    } else {
      for (var i = 0; i < trial.choices.length; i++) {
        buttons.push(trial.button_html);
      }
    }
    html += '<div class = "container">';
    html += '<div id="jspsych-html-button-response-btngroup">';
    html += '</div>'
    for (var i = 0; i < trial.choices.length; i++) {
      var str = buttons[i].replace(/%choice%/g, trial.choices[i]);
      html += '<div class="jspsych-html-button-response-button" style="display: inline-block; margin:' + trial.margin_vertical + ' ' + trial.margin_horizontal + '" id="jspsych-html-button-response-button-' + i + '" data-choice="' + i + '">' + str + '</div>';
    }
    html += '</div>';

    //show prompt if there is one
    if (trial.prompt !== null) {
      html += trial.prompt;
    }
    display_element.innerHTML += html;
    jscolor.install();


    // start time
    var start_time = performance.now();

    // add event listeners to buttons
    for (var i = 0; i < trial.choices.length; i++) {
      display_element.querySelector('#jspsych-html-button-response-button-' + i).addEventListener('click', function(e) {
        var choice = e.currentTarget.getAttribute('data-choice'); // don't use dataset for jsdom compatibility
        after_response(choice);
        console.log(choice+'button is clicked')
      });
    }

    // store response
    var response = {
      rt: null,
      button: null
    };

    //function to record the time
    function addZero(x,n) {
      while (x.toString().length < n) {
        x = "0" + x;
      }
      return x;
    }
    
    const d = new Date();
    let h = addZero(d.getHours(), 2);
    let m = addZero(d.getMinutes(), 2);
    let s = addZero(d.getSeconds(), 2);
    let ms = addZero(d.getMilliseconds(), 3);
    let time = h + ":" + m + ":" + s + ":" + ms;

    // function to handle responses by the subject
    function after_response(choice) {

      // measure rt
      var end_time = performance.now();
      var rt = end_time - start_time;
      response.button = parseInt(choice);
      response.rt = rt;
      console.log('rt is '+ rt);

      // after a valid response, the stimulus will have the CSS class 'responded'
      // which can be used to provide visual feedback that a response was recorded
      display_element.querySelector('#jspsych-html-button-response-stimulus').className += ' responded';

      // disable all the buttons after a response
      var btns = document.querySelectorAll('.jspsych-html-button-response-button button');
      for (var i = 0; i < btns.length; i++) {
        //btns[i].removeEventListener('click');
        btns[i].setAttribute('disabled', 'disabled');
      }

      if (trial.response_ends_trial) {
        console.log("end button is click.");
        console.log(trial.stimulus,"is end at", time);
        console.log("we are going to end the trial");
        end_trial();
      }
    };

    //function to end trial when it is time
    function end_trial() {

      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();

      // gather the data to store for the trial
      var trial_data = {
        parameter_name: 'parameter value',
        rt: response.rt,
        stimulus: trial.stimulus,
        response: response.button
        // TODO: 還需要儲存input的內容，才能判斷正確性
      };

      // clear the display
      display_element.innerHTML = '';
      console.log("this trial is end");

      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    };

    //hide image if timing is set
    if (trial.stimulus_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        display_element.querySelector('#jspsych-html-button-response-stimulus').style.visibility = 'hidden';
      }, trial.stimulus_duration);
    }


    // end trial if time limit is set
    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, trial.trial_duration);
    }

  };

  return plugin;
})();
