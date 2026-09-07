---
title: "Don't outsource your learning"
date: 2026-09-07
lang: en
translation_key: dont-outsource-your-learning
permalink: /blog/2026/09/07/dont-outsource-your-learning/
reading_time: 10
tags: [AI, productivity, self-awareness]
description: "How I am finding my way back to active learning and giving AI a place in the process, while keeping the satisfaction of working things out."
cover_image: /assets/images/covers/dont-outsource-your-learning.png
image:
  path: /assets/images/covers/dont-outsource-your-learning.png
  alt: "A young man writing in a notebook beside books and a laptop displaying an AI chat, with small stars above him."
---

![Cover art]({{ "/assets/images/covers/dont-outsource-your-learning.png" | relative_url }})

## TL;DR

I noticed that I was handing AI opportunities to learn along with the problems I wanted it to solve. Returning to reading, investigating, and writing in my own words has helped me take an active part again. I am still finding where AI fits in that process. It can answer a question or guide a whole study session, but I want to understand and apply what I learn.

## As it was

Think back to solving a maths problem at school. You read the question, tried to understand it, and looked for a way to begin. You used what you had learned. Sometimes you got stuck and tried again.

Then you reached an answer. There was a particular satisfaction in that: I did this. I worked it out.

That moment had started long before the exam. It depended on the lessons, the notes, the exercises, and the mistakes you had worked through. Reaching the answer gave you a chance to see what all that practice had built.

Over the last few months, I have been thinking about that feeling. I noticed how often I would take a problem straight to an AI tool before giving myself time to think about it.

I would describe what was wrong and ask how to fix it. Then I would wait for the answer.

The problem could get solved while I took very little part in solving it. And I began to miss that part: trying, making connections, and reaching a point where I understood why something worked.

That made me question what I was handing over when I asked AI to do something for me. Sometimes, I was also handing over an opportunity to learn.

## Something I had learned years before

One example came from a bug at work. Text from an uploaded file would reach our application with broken Portuguese characters.

I had seen something similar years earlier, while writing PowerShell scripts to help other developers set up a project. Back then, strange characters in the output had led me to learn about character encoding. Changing how the script file was saved had fixed that earlier problem.

So when I saw the bug at work, encoding was one of the first things I suspected.

I asked a large language model, or LLM, about the symptoms, but its answer did not point me in that direction. My description had left out an important detail: the server was reading the text from a file.

I still had a reason to investigate. I searched for information and followed the code to the part that opened the file. It used the same encoding for two file types that needed different handling. The file contained information that could guide that choice, but the code was not using it to select the encoding.

The fix was small. I changed that part of the code to select the encoding required by the file type.

What stayed with me was the connection between those two experiences. Something I had taken the time to understand years before gave me a starting point. I could form a possible explanation, investigate it, and check it against the code.

That earlier effort was still useful. It helped me decide what to do when the answer I received did not solve the problem.

## What if you do not know where to start?

There is a question worth asking here: what if I had never dealt with encoding before? What if I had no earlier experience to help me recognize the problem?

That was my situation with those first PowerShell scripts. I did not know what encoding was. I could only see that the result was different from what I expected.

You do not need to know the name of a problem to start investigating it. You can begin with that difference: what did you expect to happen, and what happened instead?

The same applies when you ask an LLM for help. You might not know enough to say that its answer is wrong. But you can identify a part you do not understand and ask about it. Why would this cause the behaviour I am seeing? What information are you assuming? How could I check that explanation?

Those questions give you something to investigate. An unfamiliar term becomes something to look up. A suggested cause becomes something to test. You can read the relevant documentation, examine a small example, or try to explain the idea in your own words and see where you get stuck.

Asking the model again is only part of that work. It can give a clear explanation that is still wrong. Look for something you can check outside the conversation.

I do not think you need to begin with the confidence to challenge an answer. You can begin by admitting that you do not understand it yet.

That gives you a next step. And what you learn while taking it may become the experience you draw on the next time.

So go back to those things. Read an article. Take notes. Explain the problem to a colleague, or say it out loud to a rubber duck. Give yourself time to discover what you understand and what you still need to learn.

When you find an explanation, pause before moving on. Try to put it in your own words. Use it in a small example. Ask yourself why it works.

These are things I have been trying to bring back into my days. When I reach for an AI tool, I try to leave room for my own investigation too. Sometimes that means reading a source it mentions. Sometimes it means following the code or writing down what I think is happening before asking another question.

You can start with one of those actions on the problem in front of you. Then do it again when another question comes up. Give that habit a place in your day.

The books, articles, documentation, and conversations are still there. Return to them. Ask questions. Try things. Take an active part in what you are learning.

## Give AI a place in the way you learn

Once I started bringing those habits back, I began thinking about where AI could help me within them.

I am still working that out. After spending so much time handing problems to AI, I felt lost when I tried to describe how I learned. I had to pay attention to what had worked for me before and what I wanted to bring back.

I read and watch a lot. As I read, I try to picture what is being explained. But I also need to write, often while I am still reading, watching, or listening. Putting an idea into words helps me make sense of it.

I take notes by hand and on my computer. Both work for me, although typing is easier for longer sessions. I use Obsidian for those notes.

The important part, for me, is finding my own words. Sometimes I keep the wording from a source because I cannot explain it well yet. Most of the time, I try to describe what I understood. If I am watching a recorded lesson, I might replay the same part two or three times while I work out how to explain it.

That is one place where AI has become useful to me. I can ask about a concept I do not understand or follow up on a question that appears while I am writing. Sometimes I want help with that specific point so I can continue studying. I have written instructions for the tool based on how I like explanations to be presented, and I keep adjusting them.

What I want from an explanation is something I can work with. Can I explain the idea back? Can I write a note in my own words? Where do I still get stuck?

I am also testing a process that gives AI a much larger role. In that version, it acts as the main teacher and organizes the study session. I tell it what I am learning, what I want to achieve, and how much detail I want to explore. I use a skill I am developing to guide those sessions, including when I am following a class elsewhere.

I am still testing it. I also read about other people's methods and try the parts that seem useful. My process is not finished, and I do not think I need to present it as finished to share what I am finding.

Yours may look very different. You may want AI to answer an occasional question, guide a whole session, or have no role at all. You have your own experience, needs, and time available.

Start by describing what you do when you study and what helps you understand. If you want AI involved, you can ask it to help you develop that process. You can change its role as you find out what works.

Even when AI organizes the lesson, there is work that remains yours: making sense of the ideas, trying them, and finding out whether you can use them. That is the part I want to keep doing, whatever form my system takes.

## I worked it out

I keep coming back to that maths problem at school. The satisfaction of solving it came from seeing what I could do with everything I had learned along the way.

That is what I want to keep experiencing as I learn with AI. I want to reach an answer and understand how I got there.

I am still finding my way. But I can start with the next question, the next note, the next attempt to explain something in my own words.

So can you. Use the help you need. Give yourself a part in the work. Leave room for that moment when you can say: I worked it out.

Perhaps something I learn today will help me years from now, with a problem I cannot yet imagine.

> “You can’t connect the dots looking forward. You can only connect them looking backwards.”
>
> — Steve Jobs, [Stanford commencement address, 2005](https://news.stanford.edu/stories/2005/06/youve-got-find-love-jobs-says).
