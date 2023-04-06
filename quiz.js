$(document).ready(function(){
    correct = ["BTS", "Twice", "BTS", "Blackpink", "BTS"];
    questions = ["Which KPOP group debuted in 2013 with the song 'No More Dream'?", "Which KPOP group's fandom is known as 'ONCE'?", "Which KPOP group is known for their retro concept and hit songs like 'Dynamite' and 'Butter'?", "Which KPOP group's name stands for 'Bangtan Sonyeondan' in Korean?"]
    choice_options = [["BTS", "EXO", "Blackpink", "Red Velvet"], ["Twice", "Red Velvet", "Blackpink", "EXO"], ["BTS", "SHINee", "Seventeen", "Super Junior"], ["Twice", "Blackpink", "Red Violet", "Mamamoo"], ["BTS", "EXO", "Seventeen", "NCT"]]
    
    quizBox = $("#quiz-box");
    
    quizBox.append ("<div class='question'>"); 
    $('.question').append ("<p class='d'> Q1. Which KPOP group debuted in 2013 with the song 'No More Dream'?</p>");
    $('.question').append ("<label><input type='radio' name='q1' value='a'>BTS</label>")
    $('.question').append ("<label><input type='radio' name='q1' value='a'>EXO</label>")
    $('.question').append ("<label><input type='radio' name='q1' value='a'>Blackpink</label>")
    $('.question').append ("<label><input type='radio' name='q1' value='a'>Red Velvet</label>")
    $('.question').append ("<p class='d'> Q2. Which KPOP group's fandom is known as 'ONCE'?</p>");
    $('.question').append ("<label><input type='radio' name='q2' value='a'>Twice</label>")
    $('.question').append ("<label><input type='radio' name='q2' value='a'>Red Velvet</label>")
    $('.question').append ("<label><input type='radio' name='q2' value='a'>Blackpink</label>")
    $('.question').append ("<label><input type='radio' name='q2' value='a'>EXO</label>")
    $('.question').append ("<p class='d'> Q3. Which KPOP group is known for their retro concept and hit songs like 'Dynamite' and 'Butter'?</p>");
    $('.question').append ("<label><input type='radio' name='q3' value='a'>BTS</label>")
    $('.question').append ("<label><input type='radio' name='q3' value='a'>SHINee</label>")
    $('.question').append ("<label><input type='radio' name='q3' value='a'>Seventeen</label>")
    $('.question').append ("<label><input type='radio' name='q3' value='a'>Super Junior</label>")
    $('.question').append ("<p class='d'> Q4. Which KPOP group's members include Jennie, Lisa, Rosé, and Jisoo?</p>");
    $('.question').append ("<label><input type='radio' name='q4' value='a'>Twice</label>")
    $('.question').append ("<label><input type='radio' name='q4' value='a'>Blackpink</label>")
    $('.question').append ("<label><input type='radio' name='q4' value='a'>Red Violet</label>")
    $('.question').append ("<label><input type='radio' name='q4' value='a'>Mamamoo</label>")
    $('.question').append ("<p class='d'> Q5. Which KPOP group's name stands for 'Bangtan Sonyeondan' in Korean?</p>");
    $('.question').append ("<label><input type='radio' name='q5' value='a'>BTS</label>")
    $('.question').append ("<label><input type='radio' name='q5' value='a'>EXO</label>")
    $('.question').append ("<label><input type='radio' name='q5' value='a'>Seventeen</label>")
    $('.question').append ("<label><input type='radio' name='q5' value='a'>NCT</label>")

    countCorrect = 0;
    reset = false;
    
    $("button").click (function (event){
     $("input[name=q1]").each (function (index){
          choice = $(this).parent().text(); 
          if ($( this ).prop("checked") == true && correct [0] == choice){
               countCorrect += 1;
          }
   })
   $("input[name=q2]").each (function (index){
      choice = $(this).parent().text(); 
      if ($( this ).prop("checked") == true && correct [1] == choice){
           countCorrect += 1;
      }
  })

  $("input[name=q3]").each (function (index){
      choice = $(this).parent().text(); 
      if ($( this ).prop("checked") == true && correct [2] == choice){
           countCorrect += 1;
      }
  })

  $("input[name=q4]").each (function (index){
      choice = $(this).parent().text(); 
      if ($( this ).prop("checked") == true && correct [3] == choice){
           countCorrect += 1;
      }
  })

  $("input[name=q5]").each (function (index){
      choice = $(this).parent().text(); 
      if ($( this ).prop("checked") == true && correct [4] == choice){
           countCorrect += 1;
      }
  })
    $("#quiz-box").append ("<h2>Your score: " + countCorrect + "</h2>");
    }); 

});