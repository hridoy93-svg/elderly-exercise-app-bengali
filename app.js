// Exercise data
const exercises = [
  {
    id: 1,
    name: 'চেয়ারে বসে শ্বাসপ্রশ্বাস',
    category: 'warm-up',
    duration: 60,
    instructions: [
      'একটি শক্ত চেয়ারে সোজা হয়ে বসুন',
      'পিঠ সোজা রাখুন এবং পা মেঝেতে সমতল রাখুন',
      'নাক দিয়ে গভীরভাবে শ্বাস নিন (৪ গণনা)',
      'মুখ দিয়ে ধীরে ধীরে শ্বাস ছাড়ুন (৪ গণনা)',
      '৫-৮ বার পুনরাবৃত্তি করুন'
    ],
    benefits: 'ফুসফুসের ক্ষমতা বাড়ায়, মন শান্ত করে',
    image: '🧘'
  },
  {
    id: 2,
    name: 'ঘাড় ঘোরানো',
    category: 'flexibility',
    duration: 90,
    instructions: [
      'চেয়ারে সোজা হয়ে বসুন',
      'ধীরে ধীরে মাথা ডান দিকে ঘুরান',
      '৫ সেকেন্ড ধরে রাখুন',
      'কেন্দ্রে ফিরে আসুন',
      'বাম দিকে একই পদ্ধতিতে করুন',
      'প্রতিটি দিকে ৩ বার পুনরাবৃত্তি করুন'
    ],
    benefits: 'ঘাড়ের শক্ততা কমায়, নমনীয়তা বাড়ায়',
    image: '🔄'
  },
  {
    id: 3,
    name: 'কাঁধ উত্তোলন',
    category: 'strength',
    duration: 60,
    instructions: [
      'চেয়ারে সোজা হয়ে বসুন',
      'উভয় কাঁধ কানের দিকে তুলুন',
      '৩ সেকেন্ড ধরে রাখুন',
      'ধীরে ধীরে নামান',
      '১০ বার পুনরাবৃত্তি করুন',
      'শ্বাসপ্রশ্বাস স্বাভাবিক রাখুন'
    ],
    benefits: 'কাঁধের পেশী শক্তিশালী করে',
    image: '💪'
  },
  {
    id: 4,
    name: 'পা উত্তোলন (বসে)',
    category: 'strength',
    duration: 90,
    instructions: [
      'চেয়ারে সোজা হয়ে বসুন',
      'এক পা সোজা করে তুলুন',
      '৫ সেকেন্ড ধরে রাখুন',
      'ধীরে ধীরে নামান',
      'অন্য পায়ে একই পদ্ধতিতে করুন',
      'প্রতিটি পায়ে ৫ বার করুন'
    ],
    benefits: 'উরুর পেশী শক্তিশালী করে, ভারসাম্য উন্নত করে',
    image: '🦵'
  },
  {
    id: 5,
    name: 'পাশে বাহু প্রসারণ',
    category: 'flexibility',
    duration: 75,
    instructions: [
      'চেয়ারে সোজা হয়ে বসুন',
      'উভয় হাত পাশে প্রসারিত করুন',
      'কাঁধ বরাবর রাখুন',
      'ছোট বৃত্ত তৈরি করুন (সামনে)',
      '১০ বার ঘুরান',
      'বিপরীত দিকে ১০ বার ঘুরান'
    ],
    benefits: 'কাঁধের জয়েন্ট নমনীয় রাখে',
    image: '🌟'
  },
  {
    id: 6,
    name: 'গোড়ালি ঘোরানো',
    category: 'flexibility',
    duration: 60,
    instructions: [
      'চেয়ারে বসুন',
      'এক পা সামান্য উঁচু করুন',
      'গোড়ালি ঘড়ির কাঁটার দিকে ঘুরান',
      '৮ বার ঘুরান',
      'বিপরীত দিকে ৮ বার ঘুরান',
      'অন্য পায়ে একই পদ্ধতিতে করুন'
    ],
    benefits: 'পায়ের রক্ত সঞ্চালন বাড়ায়, ফোলা কমায়',
    image: '👣'
  },
  {
    id: 7,
    name: 'বসে মেরুদণ্ড মোচড়',
    category: 'flexibility',
    duration: 90,
    instructions: [
      'চেয়ারে সোজা হয়ে বসুন',
      'ডান হাত চেয়ারের পিছনে রাখুন',
      'ধীরে ধীরে ডান দিকে ঘুরুন',
      '১০ সেকেন্ড ধরে রাখুন',
      'কেন্দ্রে ফিরে আসুন',
      'বাম দিকে একই পদ্ধতিতে করুন',
      'প্রতিটি দিকে ৩ বার করুন'
    ],
    benefits: 'মেরুদণ্ডের নমনীয়তা বাড়ায়, পিঠের ব্যথা কমায়',
    image: '🔃'
  },
  {
    id: 8,
    name: 'শিথিলকরণ শ্বাস',
    category: 'cooldown',
    duration: 120,
    instructions: [
      'আরামদায়ক অবস্থায় বসুন',
      'চোখ বন্ধ করুন',
      'গভীরভাবে শ্বাস নিন',
      'শরীরের প্রতিটি অংশ শিথিল করুন',
      '২ মিনিট চালিয়ে যান',
      'ধীরে ধীরে চোখ খুলুন'
    ],
    benefits: 'মানসিক চাপ কমায়, শরীর পুনরুদ্ধার করে',
    image: '😌'
  }
];

const categories = [
  { id: 'all', name: 'সব ব্যায়াম', emoji: '📋' },
  { id: 'warm-up', name: 'ওয়ার্ম আপ', emoji: '🔥' },
  { id: 'strength', name: 'শক্তি', emoji: '💪' },
  { id: 'flexibility', name: 'নমনীয়তা', emoji: '🤸' },
  { id: 'cooldown', name: 'শিথিলকরণ', emoji: '😌' }
];

// App state
let state = {
  view: 'home',
  currentExercise: null,
  timer: 0,
  isRunning: false,
  selectedCategory: 'all',
  isSpeaking: false,
  autoRead: true,
  timerInterval: null
};

// Speech functions
function speak(text) {
  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'bn-IN';
  utterance.rate = 0.8;
  utterance.pitch = 1;
  utterance.volume = 1;
  
  utterance.onstart = () => {
    state.isSpeaking = true;
    render();
  };
  utterance.onend = () => {
    state.isSpeaking = false;
    render();
  };
  utterance.onerror = () => {
    state.isSpeaking = false;
    render();
  };
  
  window.speechSynthesis.speak(utterance);
}

function stopSpeaking() {
  window.speechSynthesis.cancel();
  state.isSpeaking = false;
  render();
}

function readInstructions() {
  if (state.currentExercise) {
    const text = `${state.currentExercise.name}. ${state.currentExercise.instructions.join('. ')}`;
    speak(text);
  }
}

function readCurrentInstruction(instruction) {
  speak(instruction);
}

// Timer functions
function startTimer() {
  if (state.timerInterval) return;
  
  state.isRunning = true;
  state.timerInterval = setInterval(() => {
    if (state.timer >= state.currentExercise.duration) {
      stopTimer();
      return;
    }
    state.timer++;
    render();
  }, 1000);
  render();
}

function stopTimer() {
  state.isRunning = false;
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
  render();
}

function toggleTimer() {
  if (state.isRunning) {
    stopTimer();
  } else {
    startTimer();
  }
}

function resetTimer() {
  state.timer = 0;
  stopTimer();
}

// Navigation functions
function startExercise(exercise) {
  state.currentExercise = exercise;
  state.view = 'exercise';
  state.timer = 0;
  stopTimer();
  stopSpeaking();
  
  setTimeout(() => {
    if (state.autoRead) {
      const text = `${exercise.name}. ${exercise.instructions.join('. ')}`;
      speak(text);
    }
  }, 500);
  
  render();
}

function goToHome() {
  state.view = 'home';
  stopTimer();
  stopSpeaking();
  render();
}

function goToNextExercise() {
  const currentIndex = exercises.findIndex(e => e.id === state.currentExercise.id);
  if (currentIndex < exercises.length - 1) {
    startExercise(exercises[currentIndex + 1]);
  }
}

function goToPrevExercise() {
  const currentIndex = exercises.findIndex(e => e.id === state.currentExercise.id);
  if (currentIndex > 0) {
    startExercise(exercises[currentIndex - 1]);
  }
}

function setCategory(categoryId) {
  state.selectedCategory = categoryId;
  render();
}

function toggleAutoRead() {
  state.autoRead = !state.autoRead;
  render();
}

// Render functions
function renderHome() {
  const filteredExercises = state.selectedCategory === 'all' 
    ? exercises 
    : exercises.filter(e => e.category === state.selectedCategory);

  return `
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4">
      <div class="max-w-4xl mx-auto">
        <div class="bg-white rounded-3xl shadow-xl p-8 mb-6">
          <h1 class="text-4xl font-bold text-center text-green-700 mb-2">
            🧘 বয়স্কদের ব্যায়াম অ্যাপ
          </h1>
          <p class="text-center text-gray-600 text-lg">
            ঘরে বসে সহজ ব্যায়াম • পেশী শক্তিশালী করুন • নমনীয়তা বাড়ান
          </p>
        </div>

        <div class="bg-amber-100 border-l-4 border-amber-500 p-6 rounded-lg mb-6">
          <p class="text-lg font-semibold text-amber-900 mb-2">⚠️ গুরুত্বপূর্ণ নির্দেশনা:</p>
          <ul class="text-amber-800 space-y-1">
            <li>• ব্যায়াম শুরুর আগে আপনার ডাক্তারের পরামর্শ নিন</li>
            <li>• ব্যথা অনুভব করলে সাথে সাথে থামুন</li>
            <li>• নিয়মিত জল পান করুন</li>
            <li>• আরামদায়ক পোশাক পরুন</li>
          </ul>
        </div>

        <div class="flex gap-2 mb-6 overflow-x-auto pb-2">
          ${categories.map(cat => `
            <button
              onclick="setCategory('${cat.id}')"
              class="px-4 py-3 rounded-xl font-semibold whitespace-nowrap transition-all ${
                state.selectedCategory === cat.id
                  ? 'bg-green-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-green-50'
              }"
            >
              ${cat.emoji} ${cat.name}
            </button>
          `).join('')}
        </div>

        <div class="grid md:grid-cols-2 gap-4">
          ${filteredExercises.map(exercise => `
            <div
              onclick="startExercise(${JSON.stringify(exercise).replace(/"/g, '&quot;')})"
              class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 cursor-pointer border-2 border-transparent hover:border-green-300"
            >
              <div class="text-6xl mb-4 text-center">${exercise.image}</div>
              <h3 class="text-2xl font-bold text-gray-800 mb-3 text-center">
                ${exercise.name}
              </h3>
              <div class="flex justify-center items-center gap-2 text-green-700 mb-3">
                <span class="text-lg font-semibold">⏱ ${exercise.duration} সেকেন্ড</span>
              </div>
              <p class="text-gray-600 text-center mb-4">${exercise.benefits}</p>
              <button class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                ▶ শুরু করুন
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderExercise() {
  const exercise = state.currentExercise;
  const progress = (state.timer / exercise.duration) * 100;
  const currentIndex = exercises.findIndex(e => e.id === exercise.id);

  return `
    <div class="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div class="max-w-3xl mx-auto">
        <button
          onclick="goToHome()"
          class="mb-4 px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 font-semibold text-gray-700"
        >
          🏠 হোম পেজে ফিরুন
        </button>

        <div class="bg-white rounded-3xl shadow-2xl p-8">
          <div class="text-center mb-6">
            <div class="text-8xl mb-4">${exercise.image}</div>
            <h2 class="text-4xl font-bold text-green-700 mb-2">
              ${exercise.name}
            </h2>
            <p class="text-gray-600 text-lg">${exercise.benefits}</p>
          </div>

          <div class="mb-8">
            <div class="flex justify-between text-sm text-gray-600 mb-2">
              <span>অগ্রগতি</span>
              <span>${state.timer} / ${exercise.duration} সেকেন্ড</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                class="bg-green-600 h-4 rounded-full transition-all duration-1000"
                style="width: ${progress}%"
              ></div>
            </div>
          </div>

          <div class="bg-blue-50 rounded-2xl p-6 mb-6">
            <div class="flex justify-between items-center mb-4 flex-wrap gap-2">
              <h3 class="text-2xl font-bold text-blue-900">📝 নির্দেশনা:</h3>
              <div class="flex gap-2">
                <button
                  onclick="toggleAutoRead()"
                  class="px-4 py-2 rounded-lg font-semibold transition-all ${
                    state.autoRead 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-300 text-gray-700'
                  }"
                  title="${state.autoRead ? 'স্বয়ংক্রিয় পাঠ চালু' : 'স্বয়ংক্রিয় পাঠ বন্ধ'}"
                >
                  ${state.autoRead ? '🔊 স্বয়ংক্রিয়' : '🔇 ম্যানুয়াল'}
                </button>
                ${state.isSpeaking ? `
                  <button
                    onclick="stopSpeaking()"
                    class="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-all flex items-center gap-2"
                  >
                    🔇 বন্ধ করুন
                  </button>
                ` : `
                  <button
                    onclick="readInstructions()"
                    class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all flex items-center gap-2"
                  >
                    🔊 সব পড়ুন
                  </button>
                `}
              </div>
            </div>
            <ol class="space-y-3">
              ${exercise.instructions.map((instruction, index) => `
                <li class="flex gap-3 text-lg items-start group">
                  <span class="font-bold text-blue-600 bg-blue-200 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    ${index + 1}
                  </span>
                  <span class="text-gray-800 flex-1">${instruction}</span>
                  <button
                    onclick='readCurrentInstruction("${instruction.replace(/"/g, '&quot;')}")'
                    class="opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-blue-100 hover:bg-blue-200 rounded-lg"
                    title="এই ধাপটি পড়ুন"
                  >
                    🔊
                  </button>
                </li>
              `).join('')}
            </ol>
          </div>

          <div class="flex gap-3 mb-4">
            <button
              onclick="toggleTimer()"
              class="flex-1 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 ${
                state.isRunning
                  ? 'bg-orange-500 hover:bg-orange-600 text-white'
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }"
            >
              ${state.isRunning ? '⏸ থামান' : '▶ শুরু করুন'}
            </button>
            <button
              onclick="resetTimer()"
              class="px-6 py-4 bg-gray-500 hover:bg-gray-600 text-white rounded-xl font-bold transition-all"
            >
              ↻
            </button>
          </div>

          <div class="flex gap-3">
            <button
              onclick="goToPrevExercise()"
              ${currentIndex === 0 ? 'disabled' : ''}
              class="flex-1 py-4 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2"
            >
              ← আগের ব্যায়াম
            </button>
            <button
              onclick="goToNextExercise()"
              ${currentIndex === exercises.length - 1 ? 'disabled' : ''}
              class="flex-1 py-4 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2"
            >
              পরের ব্যায়াম →
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function render() {
  const root = document.getElementById('root');
  root.innerHTML = state.view === 'home' ? renderHome() : renderExercise();
}

// Make functions globally available
window.startExercise = (exercise) => startExercise(exercise);
window.goToHome = goToHome;
window.goToNextExercise = goToNextExercise;
window.goToPrevExercise = goToPrevExercise;
window.setCategory = setCategory;
window.toggleTimer = toggleTimer;
window.resetTimer = resetTimer;
window.toggleAutoRead = toggleAutoRead;
window.readInstructions = readInstructions;
window.readCurrentInstruction = readCurrentInstruction;
window.stopSpeaking = stopSpeaking;

// Initial render
render();
