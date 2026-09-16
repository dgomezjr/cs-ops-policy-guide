// SCREENSHOT REGISTRY
// -----------------------------------------------------------------------
// This file controls which screenshots appear on which policy, and in
// what order. You do not need to touch index.html, app.js, or data.js
// to add images — everything happens here.
//
// HOW TO ADD A SCREENSHOT
// 1. Save the image file into the /images folder (png or jpg).
//    Use a clear filename, e.g. images/vcc-standard-request-step1.png
// 2. Find the "block id" for the policy it belongs to. The easiest way:
//    open the tool, navigate to that policy, and look at the URL —
//    it ends in #something-like-this. That's the block id.
// 3. Add an entry below under that block id, inside the array.
//    Entries in the array render in the order you list them, so if a
//    policy needs 4 screenshots showing 4 steps, list them in order
//    and give each a short caption describing that step.
//
// EXAMPLE (already filled in as a template — delete or edit freely):
//
// "15-2": [
//   { file: "images/vcc-step1-open-request.png", caption: "Step 1: Open the VCC request in Plex" },
//   { file: "images/vcc-step2-confirm-amount.png", caption: "Step 2: Confirm the amount matches the hotel invoice" },
//   { file: "images/vcc-step3-submit.png", caption: "Step 3: Submit and record the confirmation number" }
// ],
//
// If a block id has no entry here (or an empty array), no screenshots
// show for that policy — that's fine, most won't have any.
// -----------------------------------------------------------------------

const GUIDE_MEDIA = {
  // add your entries here
};
