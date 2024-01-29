import React from "react";

const Differential = () => {
  return (
    <div className="py-[40px]">
      <div className="container">
        <div className="grid items-center has-bg lg:grid-cols-2 grid-cols-1 gap-[23px] md:gap-[100px]">
          <div className="left bg-d md:text-left text-center">
            <h2 className="text-white md:text-left text-center text-[32px] md:text-[42px] mb-5">
              our differential
            </h2>
            <p className="text-sm md:text-xl mb-8">
              Innovative Machine Learning Integration We are at the forefront of
              behavior engineering in blockchain security, utilizing
              cutting-edge Machine Learning classifiers to detect anomalies in
              blockchain transactions. Our project not only identifies
              irregularities but also brings the power of Explainable AI (XAI)
              into play. We employ the SHapely Additive exPlanations (SHAP)
              method, enhancing the transparency and interpretability of our
              detection mechanisms.
            </p>
            <p className="text-sm md:text-xl text-white mb-8">
              Custom Under-Sampling Algorithm: XGBCLUS Our novel under-sampling
              algorithm, XGBCLUS, specifically addresses the challenge of data
              imbalance, a pervasive issue in blockchain transaction data. It
              stands out by showing significant improvement in True Positive
              Rate (TPR) and ROC-AUC scores, outperforming traditional
              under-sampling and over-sampling techniques.
            </p>
          </div>

          <div className="right md:text-left text-center">
            <p className="text-sm md:text-xl text-white mb-8">
              Superior Ensemble Classifiers We leverage the strength of ensemble
              classifiers, including stacking and voting models, to surpass the
              accuracy of traditional single tree-based classifiers. These
              sophisticated models demonstrate exceptional accuracy, TPR, and
              FPR scores, setting a new standard in anomaly detection.
            </p>
            <p className="text-sm md:text-xl text-white mb-8">
              Enhanced Interpretability with SHAP Analysis Our project goes
              beyond mere detection; we provide clarity on the ‘why’ behind our
              models&#39; predictions. Through SHAP analysis and rule
              presentation, we pinpoint the influential features in transaction
              classifications and offer a set of interpretable rules for
              anomalous transactions, making our decision-making process
              transparent.
            </p>
            <p className="text-sm md:text-xl text-white mb-8">
              Benchmarking Excellence We conduct exhaustive comparative
              analyses, benchmarking our methods against the latest techniques
              in the field. This not only underscores the superiority of our
              approaches but also showcases our commitment to advancing
              blockchain security.
            </p>
            <p className="text-sm md:text-xl text-white mb-8">
              Elevating Detection Dynamics: Synergizing AI with Human
              Intelligence The BugHunters Platform (TBA) gives us an edge,
              propelling us ahead of competitors in detecting new malicious
              patterns and activities in blockchain transactions. Our
              super-experienced team enhances the Artificial-Human intelligence
              mechanism, capable of pioneering new developments and analytics
              that are truly mind-blowing in this domain.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Differential;
